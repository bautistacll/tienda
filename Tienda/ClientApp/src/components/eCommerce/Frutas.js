import React from 'react';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';

const Frutas = ({product}) => {
  const {imagen, codigo, descripcion, estado, id, idCategoria, nombre, precioVenta, stock} = product;
  return (
    <div className="col-xl-3 col-md-4 col-sm-6 col-12">
      <div className="card product-item">
        <div className="card-header border-0 p-0">
          <div className="card-image">
            <div className="grid-thumb-equal">
              <span className="grid-thumb-cover jr-link">
                <img alt="Remy Sharp" src={`data:image/jpeg;base64,${imagen}`}/>
              </span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="product-details">
            <h3 className="card-title text-truncate fw-regular">{nombre}
              <small className="text-grey text-darken-2">{", Codigo: " + codigo}</small>
            </h3>
            <div className="d-flex ">
              <h3 className="card-title">{precioVenta} </h3>
              <h5 className="text-muted px-2">
              </h5>
              <h5 className="text-success">{stock} En Stock</h5>
            </div>
            <div className="d-flex flex-row">
              <StarRatingComponent
                name=""
                value={5}
                starCount={5}
                editing={false}/>
              <strong className="d-inline-block ml-2">{5}</strong>
            </div>
            <p>{descripcion}</p>
          </div>
          <div>
            <Button color="primary" variant="contained" className="jr-btn jr-btn-sm ">
              <i className="zmdi zmdi-shopping-cart"/>
              <span>Agregar al Carrito</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Frutas;

