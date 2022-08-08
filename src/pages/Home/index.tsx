import { useMemo, useState } from "react";
import Home from "../../components/templates/Home";
import { listProducts } from "../../items/listProducts";

function HomePage() {
  const [data,setData] = useState<IProduct[]>(listProducts)
  const listProductsMemo = useMemo(() => data, [data]);

  const saveWishList = (index:number = -1) => {
    let array =  data;
      const newValue = !array[index].wishList
      array[index].wishList = newValue
      setData([...array])
  }

  const addItemList = (index:number = -1) => {
    let array =  data;
      const newValue = !array[index].checked
      array[index].checked = newValue
      setData([...array])
  }

  return (
    <div className="App">
      <Home
       onClickButton={addItemList}
       onClickWishList={saveWishList}
       data={listProductsMemo}      
      />
    </div>
  );
}

export default HomePage;
