import componentFactory from '../../../utils/componentFactory';
import styles from './index.module.scss';

const Button = componentFactory<IButtonProps>('Button',(props, ref) => {
    const {children,className = '' , buttonActive = false , onClick} = props
    const style = `${className} ${buttonActive ? styles.Favorited : ''}`;
    return (
        <button className={style} ref={ref} onClick={onClick}> 
        {children}        
        </button>
    )
});

export default Button;