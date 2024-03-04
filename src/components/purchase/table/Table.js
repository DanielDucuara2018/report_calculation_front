import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Moment from "moment";
import "./Table.css"

class DefaultTable extends Component {
  render() {
    const dateTimeFormat = "MMMM Do YYYY, h:mm:ss a"
    const purchases = this.props.purchases;
    return (
      <div className="Table">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          sx={{ maxHeight: 425 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Purchase Price</TableCell>
                <TableCell align="left">Gain</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Purchase Date</TableCell>
                <TableCell align="left">Creation Date</TableCell>
                <TableCell align="left">Update Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {purchases.map((purchase) => (
                <TableRow
                  key={purchase.purchase_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {purchase.symbol}
                  </TableCell>
                  <TableCell align="left">{purchase.quantity.toFixed(4)}</TableCell>
                  <TableCell align="left">{purchase.price}</TableCell>
                  <TableCell align="left">{purchase.gain.toFixed(2)}</TableCell>
                  <TableCell align="left">{purchase.description}</TableCell>
                  <TableCell align="left">{Moment(purchase.date).format(dateTimeFormat)}</TableCell>
                  <TableCell align="left">{Moment(purchase.creation_date).format(dateTimeFormat)}</TableCell>
                  <TableCell align="left">{purchase.update_date? Moment(purchase.update_date).format(dateTimeFormat):purchase.update_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default DefaultTable;