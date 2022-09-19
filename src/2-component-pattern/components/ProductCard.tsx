import React, { createContext } from "react";
import styles from "../styles/styles.module.css";
import useProducts from "../hooks/useProducts";
import { ProductContextProps, ProductCardProps } from "../interfaces/interface";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProducts();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTilte title={product.title} />
      <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  );
}

export default ProductCard;

// ProductCard.Title = ProductTilte;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

// esto se pone si se quiere usar al estilo de:
/* <ProductCard product={products}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe" />
          <ProductCard.Buttons />
        </ProductCard> */
