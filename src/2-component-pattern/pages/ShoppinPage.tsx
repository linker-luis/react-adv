
import ProductCard from "../components";
import { ProductImage } from "../components/ProductImage";
import { ProductTilte } from "../components/ProductTitle";
import { ProductButtons } from "../components/ProductButtons";

const products = {
  id: "1",
  title: "Coffee mug - card",
  img: "./coffee-mug.png",
};

function ShoppinPage() {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={products}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={products}>
          <ProductImage />
          <ProductTilte />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppinPage;
