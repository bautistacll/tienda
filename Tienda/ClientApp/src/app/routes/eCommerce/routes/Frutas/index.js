import React, { useEffect, useState } from "react";
import Frutas from "components/eCommerce/Frutas";
import { useSelector } from "react-redux";

function ProductsGrid() {
  const { category } = useSelector(({ tienda }) => tienda);
  const [categoria, setCategoria] = useState(null);
  useEffect(() => {
    if (category != null) {
      setCategoria(category);
    }
  }, [category]);
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="row products-grid-row">
        {categoria != null &&
          categoria.map((product, index) => (
            <Frutas key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductsGrid;

