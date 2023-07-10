import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import {useSearchParams} from "react-router-dom"

function Search() {
  const { getProducts, setSearch, setLoading } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${searchParams.get("q") || ''}`)
      .then((response) => response.json())
      .then((data) => {
          getProducts(data.products);
      })
      .catch((error) => {
          console.error(`We have temporary problems with the server ${error}`);
      })
      .finally(() => {
          setLoading(false);
      })
  },[searchParams.get("q")])

  // const searchProducts = () => {
  //   setLoading(true);
  //   fetch(`https://dummyjson.com/products/search?q=${searchParams.get("q")}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         getProducts(data.products);
  //     })
  //     .catch((error) => {
  //         console.error(`We have temporary problems with the server ${error}`);
  //     })
  //     .finally(() => {
  //         setLoading(false);
  //     })
  // };

  // const handleKey = (e) => {
  //   if (e.key === "Enter") {
  //     searchProducts();
  //   }
  // };

  return (
    <div className="block-search">
        <i className="material-icons" style={{fontSize: '30px', padding: "5px"}}>search</i>
      <input
        style={{ margin: 0, border: '1px solid #9e9e9e', paddingLeft: '25px'}}
        type="search"
        className="search-input"
        placeholder="Search..."
        value={searchParams.get("q") || ''}
        onChange={(e) => {
          setSearch(e.target.value);
          setSearchParams({q: e.target.value});
        }}
      />
      <button className="btn search-btn" > 
        Search
      </button>
      {/* onClick={() => searchProducts()} */}
    </div>
  );
}
export {Search}