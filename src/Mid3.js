import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Products from "./Products";
function Mid3() {
  const [products, setProduct] = useState([]);
  const [pending, setPending] = useState(true); //conditional template

  useEffect(() => {
    fetch("api/")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setProduct(products);
        setPending(false);
        //console.log(students);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Carousel />
          {pending && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border " role="status">
                <span className="visually-hidden">Loading Data...</span>
              </div>
            </div>
          )}
          {products.map((result) => (
            <Products
              key={result._id}
              name={result.name}
              disc={result.disc}
              price={result.price}
              id={result._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mid3;
