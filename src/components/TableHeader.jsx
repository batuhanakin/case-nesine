import React from "react";

export const TableHeader = ({ D, DAY, LN, count }) => {
  return (
    <tr>
      {D && DAY && LN ? (
        <td>
          {D} {DAY} {LN}
        </td>
      ) : (
        <td>Event Count {count}</td>
      )}
      <td>Yorumlar</td>
      <td></td>
      <td>1</td>
      <td>x</td>
      <td>2</td>
      <td>Alt</td>
      <td>Üst</td>
      <td>H1</td>
      <td>1</td>
      <td>x</td>
      <td>2</td>
      <td>H2</td>
      <td>1-x</td>
      <td>1-2</td>
      <td>x-2</td>
      <td>Var</td>
      <td>Yok</td>
      <td>+99</td>
    </tr>
  );
};
