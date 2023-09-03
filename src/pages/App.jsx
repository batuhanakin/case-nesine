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
  const selectItem = (index) => {
    console.log("index", bets[index]);
    addBetToBasket({ bet: bets[index] });
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <table style={{ width: "100%" }}>
        <thead className="table-head">
          <TableHeader count={bets.length} />
        </thead>
        {bets.map((item, index) => (
          <tbody key={index} className={index === 0 ? "zero-td" : undefined}>
            <TableHeader D={item.D} DAY={item.DAY} LN={item.LN} index={index} />
            <TableContent item={item} selectBet={selectItem} index={index} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default App;
