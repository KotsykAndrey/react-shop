import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const initialState = {
    isBasketShow: false,
    loading: true,
    isMobile: window.innerWidth < 800,
    products: [],
    order: [],
    alertName: '',
    search: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      const handleResize = () => {
        const bool = window.innerWidth < 800;
        dispatch({
          type: "UPDATE_MOBILE_STATUS",
          payload: bool,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    value.setLoading = (boolean) => {
        dispatch({type: 'SET_LOADING', payload: boolean})
    }

    value.setSearch = (boolean) => {
        dispatch({type: 'SET_SEARCH', payload: boolean})
    }

    value.getProducts = (data) => {
        dispatch({type: 'GET_PRODUCTS', payload: data})
    }   
    value.closeAlert = () => {
        dispatch({type : 'CLOSE_ALERT'})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }

    value.decrementQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
    }
    
    value.changeQuantity = (itemId, value) => {
        dispatch({ type: "CHANGE_QUANTITY", payload: { id: itemId, value } });
    };

    value.incrementQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    return <AppContext.Provider value={value}> 
        {children}
    </AppContext.Provider>
}