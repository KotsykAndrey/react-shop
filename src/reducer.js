export function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_MOBILE_STATUS":
      return {
        ...state,
        isMobile: payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload || [],
        loading: false,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => payload.id !== el.id),
      };
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = +el.quantity - 1;
            return { ...el, quantity: newQuantity >= 0 ? newQuantity : 0 };
          } else {
            return el;
          }
        }),
      };
    case "CHANGE_QUANTITY":
        return {
          ...state,
          order: state.order.map((el) => {
            if (el.id === payload.id) {
              const newQuantity = +payload.value ;
              return { ...el, quantity: newQuantity >= 0 ? newQuantity : 0 };
            } else {
              return el;
            }
          }),
        };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = +el.quantity + 1;
            return { ...el, quantity: newQuantity };
          } else {
            return el;
          }
        }),
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrderAddToBasket = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrderAddToBasket = [...state.order, newItem];
      } else {
        newOrderAddToBasket = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrderAddToBasket,
        alertName: payload.title,
      };
    }
    default:
      return state;
  }
}

