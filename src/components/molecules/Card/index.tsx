import componentFactory from '../../../utils/componentFactory';
import styles from './index.module.scss';
import {ReactComponent as Heart} from '../../../Images/Icon/Heart/heartIcon.svg'
import { formatterBRL } from '../../../utils/formatRealBRL';

const BodyCard = componentFactory<IBodyCardProps>('Card',(props, ref) => {
    const {children,className = ''} = props
    const style = `${styles.BodyCard} ${className}`;
    return (
        <div className={style} ref={ref}> 
        {children}        
        </div>
    )
});

BodyCard.displayName = 'Card';

const Photo = componentFactory<IImageCardProps>('Image',(props, ref) => {  
    const {image,checked = false ,onClickWishList} = props 
    const style =  `${checked ? styles.Favorited : ''} ${styles.IconHeart}`
    return (
      <span ref={ref} className={styles.Image}>
      <Heart className={style} onClick={onClickWishList}/>
      <img
          src={image}
          alt={"product image"}
         
        />
     </span>
    );
});

Photo.displayName = 'Card.Photo';

const Content = componentFactory<IContentCardProps>('Content',(props, ref) => {  
  const {numberInstallments,oldPrice,price,productName} = props 
  return (
    <section ref={ref} className={styles.Content}>
   <h3>{productName}</h3>
   <span className={styles.OldPrice}>{formatterBRL(oldPrice)}</span>   
   <br/>
   <span className={styles.Price}>{formatterBRL(price)}</span>   
   <br/>
   {numberInstallments && <span className={styles.NumberInstallments}>em até <b>{numberInstallments}x de {formatterBRL(price/numberInstallments)}</b> sem juros</span>}
   
   </section>
  );
});

Content.displayName = 'Card.Content';

const Card = Object.assign(BodyCard, {Photo, Content});
export default Card;