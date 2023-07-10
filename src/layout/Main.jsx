import { AppContext } from "../context";
import { ProductsList } from "../components/ProductsList";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";
import { useEffect, useContext } from "react";

function Main() {
    const {getProducts, loading, isMobile, setLoading, search } = useContext(AppContext);

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((response) => response.json())
          .then((data) => {
            getProducts(data.products);
          })
          .catch((error) => {
            console.error(`We have temporary problems with the server ${error}`);
          })
          .finally(() => {
            setLoading(false);
          });
    }, []);

    return (
        <main className="main content">
            <>
            {isMobile ? <Search /> : null}
            {loading ? <Preloader /> : <ProductsList />}
            </>
        </main>
    );
}

export {Main}