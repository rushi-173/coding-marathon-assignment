
import { DB } from "./database";

export const initialState = {
    products: DB,
    filters: {
      priceSort: "",
      sortByBrand: [],
      sortByIdealFor: [],
      sortBySize: [],
    },
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case  "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
  
      case  "SORT_BY_HIGH_TO_LOW":
        return {
          ...state,
          filters: {
            ...state.filters,
            priceSort: action.payload,
          },
        };
  
      case  "SORT_BY_LOW_TO_HIGH":
        return {
          ...state,
          filters: {
            ...state.filters,
            priceSort: action.payload,
          },
        };
  
      case  "SORT_BY_BRAND":
        return state.filters.sortByBrand.includes(action.payload)
          ? {
              ...state,
              filters: {
                ...state.filters,
                sortByBrand: state.filters.sortByBrand.filter(
                  (brand) => brand !== action.payload
                ),
              },
            }
          : {
              ...state,
              filters: {
                ...state.filters,
                sortByBrand: state.filters.sortByBrand.concat(action.payload),
              },
            };
  
      case  "SORT_BY_SIZES":
        return state.filters.sortBySize.includes(action.payload)
          ? {
              ...state,
              filters: {
                ...state.filters,
                sortBySize: state.filters.sortBySize.filter(
                  (brand) => brand !== action.payload
                ),
              },
            }
          : {
              ...state,
              filters: {
                ...state.filters,
                sortBySize: state.filters.sortBySize.concat(action.payload),
              },
            };
  
      case  "SORT_BY_IDEAL_FOR":
        return state.filters.sortByIdealFor.includes(action.payload)
          ? {
              ...state,
              filters: {
                ...state.filters,
                sortByIdealFor: state.filters.sortByIdealFor.filter(
                  (brand) => brand !== action.payload
                ),
              },
            }
          : {
              ...state,
              filters: {
                ...state.filters,
                sortByIdealFor: state.filters.sortByIdealFor.concat(
                  action.payload
                ),
              },
            };
  
      case  "CLEAR_FILTER":
        return {
          ...state,
          filters: {
            priceSort: "",
            sortByBrand: [],
            sortByIdealFor: [],
            sortBySize: [],
          },
        };
  
      default:
        return { state };
    }
  };