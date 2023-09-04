import React, { useState, useEffect } from "react";
import "../App.css";
import { TableHeader } from "../components/TableHeader";
import { getBets } from "../api/api";
import { TableContent } from "../components/TableContent";
import { useBasket } from "../context/Basket";

const App = () => {
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addBetToBasket } = useBasket();
  useEffect(() => {
    setLoading(true);
    getBets().then((response) => {
      setBets(response);
      setLoading(false);
    });
  }, []);
  const selectItem = (index, bet) => {
    console.log("index", bets[index]);
    addBetToBasket(bets[index], bet);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div style={{ width: "100%" }}>
        <div className="table-head">
          <TableHeader count={bets?.length} />
        </div>
        {bets?.map((item, index) => (
          <div key={index} className="container-items">
            <TableHeader D={item.D} DAY={item.DAY} LN={item.LN} index={index} />
            <TableContent item={item} selectBet={selectItem} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
