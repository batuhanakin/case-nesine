import React from "react";
import { TableCell } from "./TableCell";

export const TableContent = ({ item, selectBet, index }) => {
  return (
    <div className="table-content-container">
      <TableCell selectBet={selectBet} index={index}>
        <strong>{item.C}</strong> {item.T} {item.N}
      </TableCell>
      <TableCell>Yorumlar</TableCell>
      <TableCell>4</TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[1].OC[0].O}
      </TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[1].OC[1].O}
      </TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[1]?.OC?.[2]?.O ? item.OCG[1].OC[2]?.O : " "}
      </TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[5]?.OC[25]?.O}
      </TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[5]?.OC[26]?.O}
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[2]?.OC[3]?.O}
      </TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[2]?.OC[4]?.O}
      </TableCell>
      <TableCell selectBet={selectBet} index={index}>
        {item.OCG[2]?.OC[5]?.O}
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>3</TableCell>
    </div>
  );
};
