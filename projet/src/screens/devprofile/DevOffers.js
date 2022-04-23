import React, { useEffect, useState } from "react";
import { GetAllOff } from "../../apis/OfferApi";
import { CurrentUser } from "../../apis/UserApi";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  position,
  List,
} from "@chakra-ui/react";
import { Card, ModalTitle } from "react-bootstrap";
import PostuledBy from "../client/PostuledBy";
import $ from 'jquery';
const DevOffers = () => {
  const [offer, setOffer] = useState([]);    
  const [list, setList] = useState([]);
  const [user, setUser] = useState({});

  const isOffer = async (id) => {
    const oflg = await GetAllOff();
    setOffer(oflg);
     
    offer?.filter((obj) =>
      obj.postuledby.filter((el) => {
        if (el._id === id) {        
            // list.unshift(obj);
           list.push(obj);    
        }
      }) 
    );                 
              
              
  };     

  const isUser = async () => {    
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user); 
  };
//   const Filter = (id) => {
//       setList([]);
//     offer?.filter((obj) =>
//       obj.postuledby.filter((el) => {
//         if (el._id === id) {    
//           list.push(obj);    
//         }
//       }) 
//     );
//   };        
    
  useEffect(() => { 
    isUser();    
    isOffer(user._id);
    // setList([])
    // Filter(user._id);     
  }, [user._id]);    
  console.log(list);  
  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="red">
        <TabList className=" justify-content-center">
          <Tab>
            <i className="fa fa-address-card-o px-2" aria-hidden="true"></i>
            Affected to Me
          </Tab>
          <Tab>
            <i className="fa fa-upload ms-2 px-2"></i>Offers in Pending
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div>
              <Card
                style={{
                  width: "55rem",
                  margin: "1%",
                  display: "flex",
                  displayContent: "center",
                }}
              >
                <Card.Body>
                  {offer
                    .filter((el) => el.donebyId === user._id)
                    .map((el) => (
                      <>
                        <ModalTitle>{el.prjectname}</ModalTitle>

                        <Card.Text>
                          <b>Budget : $</b>
                          {el.budget}
                        </Card.Text>
                        <br />
                        <Card.Text>{el.detail}</Card.Text>
                        <br />
                        <Card.Text>
                          <b>Duration :</b>
                          {el.duree}
                        </Card.Text>
                        <br />
                        <Card.Text>
                          <b>Date :</b>
                          {el.date.substring(0, 10)}
                        </Card.Text>
                        <br />
                      </>
                    ))}
                </Card.Body>
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Card
                style={{
                  width: "55rem",
                  margin: "1%",
                  display: "flex",
                  displayContent: "space-between",
                }}
              >
                <Card.Body>
                  {list.map((el) => (
                    <>
                      <ModalTitle>{el.prjectname}</ModalTitle>

                      <Card.Text>
                        <b>Budget : $</b>
                        {el.budget}
                      </Card.Text>
                      <br />
                      <Card.Text>{el.detail}</Card.Text>
                      <br />
                      <Card.Text>
                        <b>Duration :</b>
                        {el.duree}
                      </Card.Text>
                      <br />
                      <Card.Text>
                        <b>Date :</b>
                        {el.date.substring(0, 10)}
                      </Card.Text>
                      <br />
                    </>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default DevOffers;
