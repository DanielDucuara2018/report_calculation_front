import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Moment from 'moment';
import Api from "../../../Api";
import "./Portafolio.css"


class Portafolio extends Component {

  constructor(props) {
    super(props);
    this.state = {currencies: []}
  }

  componentDidMount() {
    Api.get("currencies/?user_id=user_1ff801bf1d12d35c549771a549f356bfa71")
    .then(res => {
      const currencies = res.data;
      this.setState({ currencies });
    })
  }

  render() {
    const dateTimeFormat = "MMMM Do YYYY, h:mm:ss a"
    const currencies = this.state.currencies

    return (
      <div className="Table">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          sx={{ maxHeight: 550 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Creation Date</TableCell>
                <TableCell align="left">Update Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {currencies.map((currency) => (
                <TableRow
                  key={currency.symbol}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {currency.symbol}
                  </TableCell>
                  <TableCell align="left">{currency.quantity.toFixed(4)}</TableCell>
                  <TableCell align="left">{currency.description}</TableCell>
                  <TableCell align="left">{Moment(currency.creation_date).format(dateTimeFormat)}</TableCell>
                  <TableCell align="left">{currency.update_date? Moment(currency.update_date).format(dateTimeFormat):currency.update_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Portafolio;