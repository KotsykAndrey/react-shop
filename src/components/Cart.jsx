import React, { useContext } from "react";
import { AppContext } from "../context";

function Cart() {
    const { order, handleBasketShow = Function.prototype} = useContext(AppContext);
    const quantity = order.length;
    return (
        <div className="cart-logo" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {
                quantity ? <span className="cart-quantity">{quantity}</span> : null
            }
        </div>
    )
}
export {Cart}