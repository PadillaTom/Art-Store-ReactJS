import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../Reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  isGrid: true,
  sortType: "name-a",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // UseEffects :
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sortType, state.filters]);

  // Views
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  // Sort and Filters:
  const updateSortType = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let filterName = e.target.name;
    let inputValue = e.target.value;

    // Handle HTML Button:
    if (filterName === "category") {
      inputValue = e.target.textContent;
    }

    // Handle HTML Data-Attribute :
    if (filterName === "color") {
      inputValue = e.target.dataset.color;
    }

    // Handle INT to STR in state, when using RANGE Value:
    if (filterName === "price") {
      inputValue = Number(inputValue);
    }

    // Handle Checkbox:
    if (filterName === "shipping") {
      inputValue = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { filterName, inputValue } });
  };

  const cleanFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSortType,
        updateFilters,
        cleanFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
