import React from "react";

export const TableHeader = ({ D, DAY, LN, count }) => {
  return (
    <div className="table-header-container">
      {D && DAY && LN ? (
        <div>
          {D} {DAY} {LN}
        </div>
      ) : (
        <div>Event Count {count}</div>
      )}
      <div>Yorumlar</div>
      <div></div>
      <div>1</div>
      <div>x</div>
      <div>2</div>
      <div>Alt</div>
      <div>Üst</div>
      <div>H1</div>
      <div>1</div>
      <div>x</div>
      <div>2</div>
      <div>H2</div>
      <div>1-x</div>
      <div>1-2</div>
      <div>x-2</div>
      <div>Var</div>
      <div>Yok</div>
      <div>+99</div>
    </div>
  );
};
