import React from 'react';
import {useNavigate} from "react-router-dom";
import { AppContext } from "../context";
import {useContext} from 'react'

function ProductPageItem(props) { 
    const {id, title, price, images, description, rating, brand, category} = props.product;
    const navigate = useNavigate();

    const { addToBasket = Function.prototype } = useContext(AppContext);

    const buttonAddToBasket = (e) => {
        e.preventDefault();
        addToBasket({ id, title, price, description, images });
    };

  return (
    <div className='content product-page'>
            <button className='btn' onClick={() => navigate(-1)}>Go back</button>
            <div className='gallery-images' style={{margin: "20px"}}>
                <img src={images[1]} alt="product" />
                <img src={images[2]} alt="product" />
                <img src={images[3]} alt="product" />
            </div>
            <table style={{margin: "20px"}}>
                <tr>
                    <th>Name of product</th>
                    <th>{title}</th>
                </tr>
                <tr>
                    <td>price</td>
                    <td>{price}</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>{description}</td>
                </tr>
                <tr>
                    <td>rating</td>
                    <td>{rating}</td>
                </tr>
                <tr>
                    <td>brand</td>
                    <td>{brand}</td>
                </tr>
                <tr>
                    <td>category</td>
                    <td>{category}</td>
                </tr>
            </table>
            <button
              className="btn" 
              onClick={buttonAddToBasket}
               >Add to cart</button>
        </div>
  )
}

export {ProductPageItem}