import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./CharDb.css";
import SideBar from "../dashboard/SideBar";
import { GetAllOff } from "../../apis/OfferApi";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartDb = () => {
  const [chart, setChart] = useState([]);

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setChart(oflg);
  };

  useEffect(() => {
    isOffer();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data",
      },
    },
  };

  const data = {
    labels: chart?.map((x) => x.prjectname.substring(0,11)),
    datasets: [
      {
        label: `${chart?.length} Users Available`,
        data: chart.map((x) => x.budget),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
console.log(chart)
  return (
    <div >
      <SideBar />
      <div className="ctn">
      <div className="content-wrapper cadre">
        <div className="card cdr w3-hover-shadow">
          <div className="card-header">
            <h5 className="card-title">
                Offers and Budgets
            </h5>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
          <div className="cht">
            <Line data={data}  options={options} />
          </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ChartDb;
