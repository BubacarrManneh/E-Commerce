import React, { useEffect, useState } from "react";

const Home = () => {
    const [prods , setProds ] = useState([])

const getProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log("data", data);
    setProds(data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="Homae">
      {prods.map((prod) => (
        <>
          <img src={prod.images} alt="" />
          <p hidden>ID: {prod.id}</p>
          <p>Title: {prod.title}</p>
          <p>Price: ${prod.price}</p>
          <p>Description: {prod.description}</p>
          <p>Product ID : {prod.category.id}</p>
          <p>Category: {prod.category.name}</p>
        </>
      ))}
    </div>
  );
}

export default Home;