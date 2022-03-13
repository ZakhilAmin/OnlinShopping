// import logo from './logo.svg';
// import './App.css';
import React from "react";
import data from "./data";

function App() {
  return (
    <React.Fragment>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              KABUL SHOPPING
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <main>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href="product.html">
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>

                <a href="product.html">
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            ))}
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </React.Fragment>
  );
}

export default App;
