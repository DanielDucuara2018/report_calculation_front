import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chart from "react-apexcharts";
import Moment from "moment";
import Api from "../../../Api";
import "./Table.css"

class DefaultTable extends Component {
  constructor(props) {
    super(props);
    this.state = {purchases: []}
  }

  componentDidMount() {
    Api.get("purchases/?user_id=user_1ff801bf1d12d35c549771a549f356bfa71")
    .then(res => {
      const purchases = res.data;
      this.setState({ purchases });
    })
  }

  get_data_chart(){
    const reduced_data = this.state.purchases.reduce((purchases, {symbol, quantity, price, gain}) => {
      if (!purchases[symbol]) purchases[symbol] = {"price": 0, "gain": 0};
      purchases[symbol]["price"] += quantity*price;
      purchases[symbol]["gain"] += gain;
      return purchases;
    }, {});
    
    console.log(reduced_data)
    var chart_data = {}
    Object.keys(reduced_data).forEach(function(key){
      var inner_data = reduced_data[key]
      chart_data[key] = Math.round((inner_data["gain"]/inner_data["price"])*100)
    });
    console.log(chart_data)
    return chart_data
  }

  render() {
    const dateTimeFormat = "MMMM Do YYYY, h:mm:ss a"
    const purchases = this.state.purchases
    const data = this.get_data_chart()
    
    const series = [{
      name: "Gain (%)",
      data: Object.values(data)
    }]

    const options = {
      chart: {
        type: "bar"
      },
      xaxis: {
        categories: Object.keys(data),
      },
      yaxis: {
        title: {
          text: "Gains (%)",
        },
      },
    }
    return (
      <>
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
          />
        </div>
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
                    <TableCell align="left">{purchase.quantity}</TableCell>
                    <TableCell align="left">{purchase.price}</TableCell>
                    <TableCell align="left">{purchase.gain}</TableCell>
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
      </>
    );
  }
}

export default DefaultTable;