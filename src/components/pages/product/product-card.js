import React from "react";

import { useCart } from "react-use-cart";

const ProductCard = (props) => {
    const { addItem } = useCart();


  const{ name, desc, price } = props.item



  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <h4 className="card-text">{desc}</h4>
          <p className="card-text">${price}</p>

          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
