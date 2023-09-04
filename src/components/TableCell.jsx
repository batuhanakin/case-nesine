import React from "react";

export const TableCell = ({ children, index, selectBet }) => {
  return (
    <div
      className={children ? "table-clickable-cell" : "table-nonClickable-cell"}
      onClick={() => selectBet(index, children)}
    >
      {children}
    </div>
  );
};
