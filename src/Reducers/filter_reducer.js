import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // Max Price of ALL Products:
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      isGrid: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      isGrid: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sortType: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sortType, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sortType === "price-asc") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sortType === "price-desc") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sortType === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sortType === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
