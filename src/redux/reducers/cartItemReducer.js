const initState = { cartItems: [], length: 0 };

const cartItemReducer = (state = initState, action) => {
  // LOGIC FOR ADDING ITEMS
  if (action.type === "addItemAction") {
    let arr = [...state.cartItems];
    let itemslength = 0;

    if (state.cartItems.length === 0) {
      arr = [...state.cartItems, action.payload];
    }
    //
    else {
      for (let item of arr) {
        arr = [...state.cartItems, action.payload];
        itemslength = itemslength + 1;
      }
    }

    return {
      ...state,
      cartItems: [...arr],
      length: itemslength + 1,
    };
  }
  // DELETING ALL CART ITEMS WHEN USER CONFIRMS AN ORDER
  else if (action.type === "removeItemsAction") {
    let arr = [...state.cartItems];
    arr = [];
    return {
      cartItems: [...arr],
      length: 0,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default cartItemReducer;
