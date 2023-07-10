import { useContext } from "react";
import { AppContext } from "../context";

function BasketItem(props) {
    const {
        changeQuantity = Function.prototype,
        removeFromBasket = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype
    } = useContext(AppContext);

    const {
        id,
        title,
        description,
        images,
        price,
        quantity
    } = props.item;

    function handleInput(itemId, e){
        const { value } = e.target;
        changeQuantity(itemId, value);
    };

    return (    
    <li className="basket-item">
        <img src={images[0]} alt="product" width="100px"/>
        <div className="basket-item-description">
            <p>{title}</p>
            <p>{description}</p>
        </div>
        <p>price: {price}$</p>
        <div className="cart-counter">
            <i className="material-icons secondary-content" onClick={() => decrementQuantity(id)} >remove</i>
            <input 
                style={{ margin: 0, border: '1px solid #9e9e9e', borderRadius: '10px' }}
                className="input-cart-counter" 
                type="text" 
                value={quantity}
                onChange={(e) => handleInput(id, e)}
            />
            <i className="material-icons secondary-content" onClick={() => incrementQuantity(id)} >add</i>
        </div>
        <p className="basket-item-total-price">{price * quantity}$</p>
        <span onClick={() => removeFromBasket(id)} >
            <i className="material-icons secondary-content" style={{fontSize: '30px'}}>close</i>
        </span>
    </li>
    );
}
export {BasketItem}