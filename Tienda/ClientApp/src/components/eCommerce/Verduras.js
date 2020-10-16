import React from "react";
import Button from "@material-ui/core/Button";
import StarRatingComponent from "react-star-rating-component";

const ProductListItem = ({ product }) => {
  const {
    imagen,
    codigo,
    descripcion,
    estado,
    id,
    idCategoria,
    nombre,
    precioVenta,
    stock,
  } = product;
  return (
    <div className="card product-item-vertical hoverable animation flipInX">
      <div className="row d-flex align-items-sm-center">
        <div className="col-xl-3 col-lg-4 col-md-3 col-12">
          <div className="card-header border-0 p-0">
            <div className="card-image">
              <div className="grid-thumb-equal">
                <span className="grid-thumb-cover jr-link">
                  <img
                    className="img-fluid"
                    src={`data:image/jpeg;base64,${imagen}`}
                    alt="..."
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-5 col-md-6 col-12">
          <div className="card-body">
            <div className="product-details">
              <h3 className="card-title fw-regular">
                {nombre}
                <small className="text-grey text-darken-2">
                  {", Codigo: " + codigo}
                </small>
              </h3>
              <div className="d-flex ">
                <h3 className="card-title">{precioVenta} </h3>
                <h5 className="text-muted px-2">
                </h5>
                <h5 className="text-success">{stock} En Stock</h5>
              </div>

              <div className="d-flex flex-row " style={{ height: 25 }}>
                <StarRatingComponent
                  name=""
                  value={5}
                  starCount={5}
                  editing={false}
                />
                <p className="ml-2">{5}</p>
              </div>
              <p>{descripcion}</p>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
          <div className="card-footer border-0 text-center bg-white">
            <div className="cart-btn mb-2">
              <Button variant="contained" className="bg-primary text-white">
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
