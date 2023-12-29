import React, { useEffect, useState } from "react";
import './index.css'

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((prevData) => ([...prevData, ...data.products]));
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true)
  },[products])

  if (loading) {
    return <div>Loading...Please wait!</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
}

export default LoadMore;
