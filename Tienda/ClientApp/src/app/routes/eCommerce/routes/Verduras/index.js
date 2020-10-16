import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import { useSelector } from "react-redux";
import Verduras from "components/eCommerce/Verduras";

function VerdurasList() {
  const { category } = useSelector(({ tienda }) => tienda);
  const [categoria, setCategoria] = useState(null);
  useEffect(() => {
    if (category != null) {
      setCategoria(category);
    }
  }, [category]);
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <List component='div' className='py-0'>
        {categoria != null && categoria.map((product, index) => (
          <Verduras key={index} product={product}/>
        ))}
      </List>
    </div>
  );
}

export default VerdurasList;