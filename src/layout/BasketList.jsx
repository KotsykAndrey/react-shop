import { BasketItem } from "../childrenComponents/BasketItem";
import { useContext } from "react";
import { AppContext } from "../context";

function BasketList() {
    const {
        order,
        handleBasketShow = Function.prototype,
    } = useContext(AppContext);

    return (
        <ul className="basket-list" id={order.id}>
            <li className="basket-item" style={{fontSize: '20px'}}>
                Your basket
                <i 
                    style={{fontSize : "40px"}} 
                    className="material-icons secondary-content" 
                    onClick={handleBasketShow}>
                        close
                </i>
            </li>
            {
                order.length ? order.map((item) => {
                    return <BasketItem key={item.id} item={item} />
                }) : null
            }
            <li className="basket-item">
                <p style={{width: "150px"}}> Total: {order.reduce((sum, el) => sum + el.price * el.quantity, 0)} usd</p>
                <button className="btn">
                    Checkout
                </button>
            </li>
        </ul>
    )
}
export {BasketList}