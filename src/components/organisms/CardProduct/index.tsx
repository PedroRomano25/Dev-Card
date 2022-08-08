import componentFactory from '../../../utils/componentFactory';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import {ReactComponent as CheckIcon} from '../../../Images/Icon/Check/checkIcon.svg'
import styles from './index.module.scss';

const CardProduct = componentFactory<ICardProductProps>('CardProduct',(props, ref) => {   
  const {image,buttonActive,checked,oldPrice,price,productName,numberInstallments, onClickWishList, onClickButton} = props
  const iconCheck = <><CheckIcon className={styles.IconCheck}/> Adicionado</>

    return (
      <Card ref={ref} >  
      <Card.Photo image={image} checked={checked} onClickWishList={onClickWishList}></Card.Photo>
      <Card.Content numberInstallments={numberInstallments} oldPrice={oldPrice} price={price} productName={productName}></Card.Content>
      <Button buttonActive={buttonActive} onClick={onClickButton}>{ buttonActive ? iconCheck : 'Adicionar'}</Button>    
    </Card >
    )
});

export default CardProduct;