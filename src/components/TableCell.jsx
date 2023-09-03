import React from "react";

export const TableCell = ({ children, index, selectBet }) => {
  return (
    <td
      className={children ? "table-clickable-cell" : "table-nonClickable-cell"}
      onClick={() => selectBet(index)}
    >
      {children}
    </td>
  );
};
