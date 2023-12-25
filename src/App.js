import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import Sidebar from "./components/Sidebar";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [query, setQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/data/products.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
      const data = await response.json();
      setProductsList(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  /* Search Products Function */
  const handleInputChange = (e) => {
    setQuery(e.target.value);

    if (query.length >= 3) {
      const filteredItems = productsList.filter(
        (product) => product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilterProducts(filteredItems);
    }
    else {
      setProductsList(productsList);
    }
  };

  const filterByCategory = (e) => {
    setQuery(e);
    const filteredItems = productsList.filter(
      (product) => product.title.toLowerCase().includes(query)
    );
    setFilterProducts(filteredItems);
    // if (query) {
    // }
    // else {
    //   setProductsList(productsList);
    // }
    // console.log(e)
  }

  console.log("query", query);

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Sidebar productsList={productsList} filterByCategory={filterByCategory} />
        <main className="container">
          <Header query={query} handleInputChange={handleInputChange} />
          <Routes>
            <Route path="/" exact element={<ProductsList productsList={query ? filterProducts : productsList} />} />
            <Route path="/products/:id" element={<ProductDetail productsList={productsList} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
