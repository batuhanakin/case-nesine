import { useEffect } from "react";
import { createContext, useCallback, useContext, useState } from "react";

const Context = createContext(null);

export const BasketProvider = ({ children }) => {
  const [items, setValue] = useState(() => []);

  useEffect(() => {
    console.log("basketitems", items);
  }, [items]);

  const addBetToBasket = useCallback(
    ({ bet }) =>
      setValue((items) => {
        return items.concat(bet);
      }),
    []
  );
  return (
    <Context.Provider value={{ items, addBetToBasket }}>
      {children}
    </Context.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(Context);
  if (!context) return;
  return context;
};
