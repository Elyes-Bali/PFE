import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
} from "chart.js";
import { Bar  } from "react-chartjs-2";
import "./CharDb.css";
import SideBar from "../dashboard/SideBar";
import { GetAllClt, GetAllDev, GetAllUsers } from "../../apis/UserApi";
ChartJS.register(
    BarElement,
  );

const ChartDb = () => {
  const [chart, setChart] = useState([]);
  const [allclt, setAllclt] = useState([]);
  const [alldev, setAlldev] = useState([]);
  
  
  const isClt = async () => {
    const uslg = await GetAllClt();
    setAllclt(uslg);
  };
  const isDevs = async () => {
    const uslg = await GetAllDev();
    setAlldev(uslg);
  };
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setChart(uslg);
  };

  const clt = ()=>{
    var nbr = 0;
    
    allclt.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbrclt= clt()


  const dev = ()=>{
    var nbr = 0;
    
    alldev.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbrdev= dev()


  const Count = ()=>{
    var nbr = 0;
    
    chart.filter((el)=>{
        if (el.isAdmin!=true) {
          nbr +=1
        }
      })
  return nbr
  }
  const nbruser= Count()

  useEffect(() => {
    isClt();
isDevs();
isUsers();
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
    labels:[ 'dev','clt'],
    datasets: [
      {
        label: `${nbruser} Users Available`,
        data: [nbrdev,nbrclt],
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
                Users
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
              <Bar data={data}  options={options} />
          </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ChartDb;
