import React, { useEffect, useState } from "react";
import { GetAllOff } from "../../apis/OfferApi";
import { CurrentUser } from "../../apis/UserApi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Card, ModalTitle } from "react-bootstrap";
import "./DevOffers.css";
const DevOffers = () => {
  const [offer, setOffer] = useState([]);
  const [list, setList] = useState([]);
  const [user, setUser] = useState({});

  const isOffer = async (id) => {
    const oflg = await GetAllOff();
    setOffer(oflg);
   var r=[]
  offer?.filter((obj) =>
      obj.postuledby.some((el) => {
        if (el._id === id) {
          // list.unshift(obj);
        return  r.push(obj)
          
        }      
      })     
                        
    );              
    setList(r)      
          
  };    
 
  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
    
  };     

  useEffect(() => {    
    isUser();
    isOffer(user._id);
    
    // setList([])  
    // Filter(user._id);
  }, [user]);
  // console.log(list);
  return (
    <div id="devf"><br/>
      <Tabs variant="soft-rounded" colorScheme="red">
        <TabList className=" justify-content-center">
          <Tab>
          <i class="fa fa-check-circle" aria-hidden="true"></i>&nbsp;
            Affected to Me
          </Tab>
          <Tab>
          <i class="fa fa-clock-o" aria-hidden="true"/>&nbsp;Offers in Pending
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="sss">
          {offer
                .filter((el) => el.donebyId === user._id)
                .map((el) => (
            <Card
              style={{
                width: "55rem",
                margin: "1%",
              }}
            >
              
                  <Card.Body>
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
                    <Card.Text>
                    {el.isAffectted ?(<div><b>Status :</b> Is Affected</div>):(<div>Available !</div>)}
                    </Card.Text>
                  </Card.Body>
                
            </Card>))}
          </TabPanel>
          <TabPanel>
            <div className="hhh row">
            {list.map((el) => (
              <Card     
                style={{
                  width: "55rem",
                  margin: "1%",
                  
                }}
                className="shadow sss"
              >  
                <Card.Body>
                     
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
                      <Card.Text>
                    {el.isAffectted ?(<div><b>Status :</b>Is Affected</div>):(<div><b>Status :</b>Available !</div>)}
                    </Card.Text>
                    </>
                
                </Card.Body>
              </Card>  ))}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default DevOffers;
