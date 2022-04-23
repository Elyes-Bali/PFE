import React, { useEffect, useState, useRef } from "react";
import Devcard from "../../components/devcard/Devcard";
import "./Community.css";
import RubberBand from 'react-reveal/RubberBand';
import { CurrentUser, GetAllDev } from "../../apis/UserApi";
import Fade from 'react-reveal/Fade';
import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, Navigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";


const Comunity = () => {
  const [listdev, setListdev] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [user,setUser]=useState({});


  const isDevs = async () => {
    const AllDev = await GetAllDev();

    setListdev(AllDev);
  };
const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
  };



  const searchItems = (searchValue) => {
    // setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = listdev.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(listdev);
    }
  };

  useEffect(() => {   
    isDevs();
    isUser();
  }, []);
  console.log(listdev);
  console.log(user);

  return (
    <div className="bgcol">
      <div className="mainSection">
        <div className="contentBox">
        <Fade left big>
          <h1 className="text-bold">Our Community</h1>
          <p>
            A whole world of freelance talent at your fingertips{" "}
            <i className="fa fa-diamond" aria-hidden="true"></i>
            <br />
            Find the perfect freelance services for your business !
          </p>
          </Fade>
            <div>
              <div className="btnn rounded-pill">
                <Input
                  icon="search"
                  placeholder="Search..."
                  onChange={(e) => {setSearchInput(e.target.value); searchItems(searchInput)}}
                />
              </div>
            </div>
            <CardGroup className="cardres" itemsPerRow={3} style={{ marginTop: 20 }}>
              {searchInput.length > 1 &&
                filteredResults.map((item) => {
                  return (
                    <Card>
                      <Link to={`/dev/${item._id}`} state={{ dev: item }}>
                        <CardHeader>{item.name}</CardHeader>
                      </Link>
                      
                    </Card>
                  );
                })}
            </CardGroup>
          
        </div>
        <div className="imgContainer">
          <img src="/images/combg3.png" alt="home" />
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-12 mb-5">
          <RubberBand>
            <h1 className="display-6 fw-bolder text-center">
              Our Feelancers <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </h1>
            </RubberBand>
            <br />
            <hr />
          </div>
        </div>
      </div>

     
        <div className="flex  row">
        
          {listdev?.filter((e)=>e._id!=user._id).map((el) => (
            <Devcard dev={el} />
            
          ))}
          
         
        </div>
      
    </div>
  );
};

export default Comunity;
