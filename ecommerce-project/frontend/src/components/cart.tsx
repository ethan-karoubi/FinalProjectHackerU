import React, { FunctionComponent, useEffect, useState } from "react";
import Product from "../interfaces/Product";
import Navbar from "./Navbar";
import { getProductsInCart } from "../services/cartService";
import { successMsg } from "../services/feedbacksService";

interface CartProps {}

const CartPage: FunctionComponent<CartProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsInCart()
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  const StyleimageUrl = {
    width: "100%",
    height: "auto",
  };
  return (
    <div>
      <Navbar />
      <h1>My cart</h1>
      {products.length ? (
        <div className="container">
          <div className="row">
            {products.map((product: Product) => (
              <div key={product._id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    style={StyleimageUrl}
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                  <div className="card-body text-center">
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                successMsg("Paid successfully");
              }}
            >
              Pay now
            </button>
          </div>
        </div>
      ) : (
        <div>No products in the cart</div>
      )}
    </div>
  );
};

export default CartPage;
