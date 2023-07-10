import { Header } from "./layout/Header";
import {Main} from './layout/Main';
import { Footer } from "./layout/Footer";
import {BasketList} from "./layout/BasketList"
import { AppContext } from "./context";
import { useContext } from "react";
import {Routes, Route} from "react-router-dom";
import {ProductPage} from "./layout/ProductPage";
import { Alert } from "./components/Alert";

function App() {
  const {isBasketShow, alertName} = useContext(AppContext);

  return (
    <div className={`App ${isBasketShow ? 'open-cart' : ''}`}>
      <Header/>
        
	    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
        
	    </Routes>
      
	    <Footer />

      { alertName ? <Alert  /> : null }
      { isBasketShow ? <BasketList /> : null }
    </div>
  );
}

export default App;
