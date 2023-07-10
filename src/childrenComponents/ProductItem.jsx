import { useContext } from "react";
import { AppContext } from "../context";
import {Link} from 'react-router-dom';

function ProductItem(props) {
    const { addToBasket = Function.prototype } = useContext(AppContext);
    const {id, title, description, images, price} = props.product;

    const handleAddToBasket = (e) => {
      e.preventDefault();
      addToBasket({ id, title, price, description, images });
    };

    return (
        <Link to={`/products/${id}`}>
      <div className="card" >
          <div className="card-image">
            <img src={images[0]} alt="product" height="300px"/>
            <span className="card-title" style={{ color: '#000' }} >{title}</span>
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div className="card-action">
            <span>{price} usd</span>
            <button
              style={{border: '0', backgroundColor: 'white'}} 
              className="material-icons" 
              onClick={handleAddToBasket}
               >add_shopping_cart</button>
          </div>
      </div>
        </Link>
    );
}
export {ProductItem}