import { AppContext } from "../context";
import { useContext } from "react";
import { Search } from "../components/Search";
import { Cart } from "../components/Cart";
import {Link} from 'react-router-dom'

function Header() {
    const {order = [], isMobile} = useContext(AppContext);
    const quantity = order.length;

    return (
        <header>
          <div className="wrapper">
            <span className="drop-down">
                <i className="material-icons" style={{fontSize: '30px'}}>reorder</i>
            </span>
            <Link to="/">
              <p className="shop-name">
                  Shop
              </p>
            </Link>
            {isMobile ? null : <Search />}
            <i className="material-icons" style={{fontSize: '30px'}}>person</i>
            <Cart quantity={quantity}/>
          </div>
        </header>
    );
}

export {Header}