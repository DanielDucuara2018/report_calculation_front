import React, { Component } from 'react';
import Chart from "react-apexcharts";


class BarChart extends Component {
  get_data_chart(purchases){
    const reduced_data = purchases.reduce((purchases, {symbol, quantity, price, gain}) => {
      if (!purchases[symbol]) purchases[symbol] = {"price": 0, "gain": 0};
      purchases[symbol]["price"] += quantity*price;
      purchases[symbol]["gain"] += gain;
      return purchases;
    }, {});
    
    var chart_data = {}
    Object.keys(reduced_data).forEach(function(key){
      var inner_data = reduced_data[key]
      chart_data[key] = Math.round((inner_data["gain"]/inner_data["price"])*100)
    });
    return chart_data
  }

  render() {
    const data = this.get_data_chart(this.props.purchases)

    const series = [{
      name: "Gain (%)",
      data: Object.values(data)
    }]

    const options = {
      chart: {
        type: "bar",
      },
      title: {
        text: 'Gain per cryptocurrency',
        align: 'left'
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
      <div className="mixed-chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          width={450}
          height={350}
        />
      </div>
    );
  }
}

export default BarChart;