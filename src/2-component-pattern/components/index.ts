import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductTilte } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interface";

export { ProductTilte } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTilte,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
