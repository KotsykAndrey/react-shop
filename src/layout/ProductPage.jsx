import React from 'react';
import {useParams} from 'react-router-dom';
import { AppContext } from "../context";
import { useContext, useEffect } from "react";
import { ProductPageItem } from '../childrenComponents/ProductPageItem';
import { Preloader } from '../components/Preloader';

function ProductPage() {
    const { getProducts = Function.prototype,
        setLoading = Function.prototype,
        products 
    } = useContext(AppContext);

    const {id} = useParams();
    const product = products[0];

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => {
            getProducts([data])
          })
          .catch((error) => {
            console.error(`We have temporary problems with the server ${error}`);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [id]);

    
  return (
        !products.length ? <Preloader />
        : <ProductPageItem product={product} />
  )
}

export {ProductPage};