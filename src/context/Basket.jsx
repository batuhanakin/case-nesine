import { useEffect } from "react";
import { createContext, useCallback, useContext, useState } from "react";

const Context = createContext(null);

export const BasketProvider = ({ children }) => {
  const [items, setValue] = useState(() => []);

  useEffect(() => {
    // console.log("basketitems", items);
  }, [items]);

  const addBetToBasket = useCallback(
    (item, bet) =>
      setValue((prev) => {
        console.log("item", item);
        console.log("bet", bet);
        console.log("prev", prev);
      }),
    []
  );
  const isSelected = useCallback(
    (bet, odds) =>
      items.some((item) => bet.C === item.bet.C && odds === item.prop),
    [items]
  );
  return (
    <Context.Provider value={{ items, addBetToBasket, isSelected }}>
      {children}
    </Context.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(Context);
  if (!context) return;
  return context;
};
