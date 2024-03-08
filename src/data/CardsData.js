import { PiCurrencyBtcFill } from "react-icons/pi";
import { ImCoinEuro } from "react-icons/im";
import { GiProfit } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";

export const cardsData = [
  {
    title: "Total",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    icon: ImCoinEuro,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Crypto",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    icon: PiCurrencyBtcFill,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Profit Crypto",
    color: {
      backGround:"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    icon: GiProfit,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Investment Crypto",
    color: {
      backGround:"linear-gradient(rgb(118, 200, 142) -134.42%, rgb(121 190 101) -34.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    icon: RiPlantLine,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },



];