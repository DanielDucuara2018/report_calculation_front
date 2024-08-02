import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends Component {
  get_data_chart(purchases) {
    return purchases.reduce((purchases, { quantity, price, date }) => {
      if (!purchases["quantities"] & !purchases["dates"]) {
        purchases["quantities"] = [];
        purchases["dates"] = [];
      }
      purchases["quantities"].push((quantity * price).toFixed(2));
      purchases["dates"].push(date);
      return purchases;
    }, {});
  }

  render() {
    const data = this.get_data_chart(this.props.purchases);

    const series = [
      {
        name: "Purchase",
        data: data["quantities"] ? data["quantities"] : [],
        type: "line",
      },
    ];

    const options = {
      chart: {
        type: "area",
        stacked: false,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 5,
        shape: "circle",
        radius: 2,
      },
      title: {
        text: "Purchase history",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        title: {
          text: "Quantity (usd)",
        },
      },
      xaxis: {
        categories: data["dates"] ? data["dates"] : [],
        type: "datetime",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            width={450}
            height={300}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default LineChart;
