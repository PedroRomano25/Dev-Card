import componentFactory from "../../../utils/componentFactory";
import GridCardContainer from "../../atoms/GridContainer";
import CardProduct from "../../organisms/CardProduct";

const Home = componentFactory<IHomeProps>("Home", (props, ref) => {
  const { data,onClickButton,onClickWishList } = props;  
  return (
    <GridCardContainer ref={ref}>
      {data.map((i,index) => (
        <CardProduct
          key={index}
          productName={i.name}
          oldPrice={i.oldPrice}
          price={i.price}
          image={i.picture}
          checked={i.wishList}
          buttonActive={i.checked}
          numberInstallments={i.numberInstallments}
          onClickButton={() => onClickButton(index)}
          onClickWishList={() => onClickWishList(index)}
        />
      ))}
    </GridCardContainer>
  );
});

export default Home;
