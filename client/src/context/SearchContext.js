import { createContext, useReducer } from "react";

const initState = {
  city: "",
  date: [],
  options: {
    adults: 1,
    children: 0,
    rooms: 1,
  },
};

export const SearchContext = createContext(initState);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return initState;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
