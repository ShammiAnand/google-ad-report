import React from "react";
import "../styles/Tables.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ads from "../assets/ads.png";

function createData(month, impr, clicks, ctr, cpc, cost) {
  return { month, impr, clicks, ctr, cpc, cost };
}

const rows = [
  createData("January", 147000, 1044, 0.71, 0.86, 892.91),
  createData("February", 147000, 1044, 0.71, 0.86, 892.91),
  createData("March", 147000, 1044, 0.71, 0.86, 892.91),
  createData("April", 147000, 1044, 0.71, 0.86, 892.91),
  createData("May", 147000, 1044, 0.71, 0.86, 892.91),
  createData("June", 147000, 1044, 0.71, 0.86, 892.91),
  createData("July", 147000, 1044, 0.71, 0.86, 892.91),
  createData("August", 147000, 1044, 0.71, 0.86, 892.91),
  createData("September", 147000, 1044, 0.71, 0.86, 892.91),
  createData("October", 147000, 1044, 0.71, 0.86, 892.91),
  createData("November", 147000, 1044, 0.71, 0.86, 892.91),
  createData("December", 147000, 1044, 0.71, 0.86, 892.91),
];

function Tables() {
  return (
    <div className="Tables">
      <div className="Tables__heading__container">
        <img src={ads} alt="ads" />{" "}
        <div className="Tables__heading">Some Table</div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell align="right">Impr.</TableCell>
                <TableCell align="right">Clicks</TableCell>
                <TableCell align="right">CTR</TableCell>
                <TableCell align="right">CPC</TableCell>
                <TableCell align="right">Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell align="right">{row.impr}</TableCell>
                  <TableCell align="right">{row.clicks}</TableCell>
                  <TableCell align="right">{row.ctr}%</TableCell>
                  <TableCell align="right">{row.cpc}%</TableCell>
                  <TableCell align="right">${row.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Tables;
