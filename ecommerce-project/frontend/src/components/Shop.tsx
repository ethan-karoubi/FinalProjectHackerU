import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { successMsg } from "../services/feedbacksService";
import { addProductToCart, getProductsInCart } from "../services/cartService";
import { getProducts } from "../services/productsService";

import Product from "../interfaces/Product";

// const products: Product[] = [
//   {
//     _id: 1,
//     name: "Iphone 11 Pro",
//     description: "",
//     price: 249,
//     imageUrl: "../Iphone12.jpg",
//     category: "iPhone",
//   },
//   {
//     _id: 2,
//     name: "Iphone 12 Pro",
//     description: "",
//     price: 299,
//     imageUrl: "../Iphone12.jpg",
//     category: "iPhone",
//   },
//   {
//     _id: 3,
//     name: "Iphone 13 Pro",
//     description: "",
//     price: 349,
//     imageUrl: "../Iphone12.jpg",
//     category: "iPhone",
//   },
//   {
//     _id: 4,
//     name: "Samsung Galaxy S3",
//     description: "",
//     price: 249,
//     imageUrl: "../Samsung.jpg",
//     category: "Samsung",
//   },
//   {
//     _id: 5,
//     name: "Samsung Galaxy S1",
//     description: "",
//     price: 149,
//     imageUrl: "../Samsung.jpg",
//     category: "Samsung",
//   },
//   {
//     _id: 6,
//     name: "Samsung Galaxy S2",
//     description: "",
//     price: 199,
//     imageUrl: "../Samsung.jpg",
//     category: "Samsung",
//   },
//   {
//     _id: 7,
//     name: "Ipad Mini",
//     description: "",
//     price: 149,
//     imageUrl: "../IpadAir.jpg",
//     category: "iPad",
//   },
//   {
//     _id: 8,
//     name: "Ipad Pro",
//     description: "",
//     price: 299,
//     imageUrl: "../IpadAir.jpg",
//     category: "iPad",
//   },
//   {
//     _id: 9,
//     name: "Ipad Air",
//     description: "",
//     price: 199,
//     imageUrl: "../IpadAir.jpg",
//     category: "iPad",
//   },
//   {
//     _id: 10,
//     name: "Nokia 3310",
//     description: "",
//     price: 1000,
//     imageUrl: "../Nokia3310.jpg",
//     category: "Nokia",
//   },
// ];

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleCategoryInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    // Ajouter ou supprimer la catégorie de la liste des catégories sélectionnées
    if (isChecked) {
      setSelectedCategory((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategory((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    }
  };

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

useEffect(() => {
  // Filtrer les produits en fonction des catégories sélectionnées
  if (products !== null) {
    const filtered = products.filter((product) => {
      if (selectedCategory.length === 0 || selectedCategory.includes("all")) {
        return true;
      }
      return selectedCategory.includes(product.category);
    });
    setFilteredProducts(filtered);
  }
}, [selectedCategory, products]);

  const styleDiv = {
    border: "gray solid 1px",
  };
  const background = {
    backgroundColor: "#ACADAF",
    minHeight: "100vh",
  };
  const StyleimageUrl = {
    width: "100%",
    height: "auto",
  };

  if (!products || products === null || products.length === 0) {
    // Products are still being fetched
    return <div>Loading...</div>;
  } else
    return (
      <div>
        <Navbar />
        <div style={background}>
          <div className="container">
            <div className="text-center" style={styleDiv}>
              <label className="mx-5">
                <input
                  type="checkbox"
                  value="iPhone"
                  onChange={handleCategoryInputChange}
                />
                <h5>iPhone</h5>
              </label>
              <label className="mx-5">
                <input
                  type="checkbox"
                  value="Samsung"
                  onChange={handleCategoryInputChange}
                />
                <h5>Samsung</h5>
              </label>
              <label className="mx-5">
                <input
                  type="checkbox"
                  value="iPad"
                  onChange={handleCategoryInputChange}
                />
                <h5>iPad</h5>
              </label>
              <label className="mx-5">
                <input
                  type="checkbox"
                  value="Nokia"
                  onChange={handleCategoryInputChange}
                />
                <h5>Nokia</h5>
              </label>
              <label className="mx-5">
                <input
                  type="checkbox"
                  value="all"
                  onChange={handleCategoryInputChange}
                />
                <h5>All</h5>
              </label>
            </div>
            <div className="row">
              {filteredProducts.map((product) => (
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
                      <div className="text-center">
                        <a
                          className="btn btn-primary"
                          onClick={() => {
                            addProductToCart(product)
                              .then(() =>
                                successMsg(
                                  `product ${product.name} added to cart`
                                )
                              )
                              .catch((err) => console.log(err));
                          }}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default ShopPage;
