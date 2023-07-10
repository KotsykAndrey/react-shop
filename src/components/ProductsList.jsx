import { ProductItem } from "../childrenComponents/ProductItem";
import { useContext } from "react";
import { AppContext } from "../context";

function ProductsList() {
  const { products } = useContext(AppContext);

  if (!products.length) {
    return <h3>Nothing found</h3>;
  } else {
    return (
      <div className="products-list">
        {products.map((item) => {
          return <ProductItem key={item.id} product={item} />;
        })}
      </div>
    );
  }
}
export { ProductsList };
