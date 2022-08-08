import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const GridCardContainer = componentFactory<ChildrenProps>('GridCardContainer',(props, ref) => {
  const {children} = props

  return (
    <div className={styles.ContainerGrid} >{children}</div>
  )
});

export default GridCardContainer;
