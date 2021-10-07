import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    // Is on cart already?
    const tempItem = state.cart.find((cartItem) => {
      return cartItem.id === id + color;
    });
    if (tempItem) {
      // IS in cart:
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          // Add to Amount:
          let newAmount = cartItem.amount + amount;
          // Amount bigger than Stock = set it to the Max Stock possible:
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      // NOT in cart: Creamos el Item y lo agregamos al Array
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
