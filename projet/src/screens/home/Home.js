import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #F0F8FF;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2.5rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "-0.3rem")};
  border: none;
  color: black;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
`;

const Home = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
   
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Feels the Fresh Business Perspective
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
              We give you the opportunity to work and get your work done
              </p>
              <div className="buttons d-flex justify-content-center">
                <div className="App">
                  <Form
                    barOpened={barOpened}
                    onClick={() => {
                      // When form clicked, set state of baropened to true and focus the input
                      setBarOpened(true);
                      inputFocus.current.focus();
                    }}
                    // on focus open search bar
                    onFocus={() => {
                      setBarOpened(true);
                      inputFocus.current.focus();
                    }}
                    // on blur close search bar
                    onBlur={() => {
                      setBarOpened(false);
                    }}
                    // On submit, call the onFormSubmit function
                    onSubmit={onFormSubmit}
                    ref={formRef}
                  >
                    <Button className="text-black" type="button" barOpened={barOpened}>
                      <b >Search</b>
                    </Button>
                    <Input
                      onChange={(e) => setInput(e.target.value)}
                      ref={inputFocus}
                      value={input}
                      barOpened={barOpened}
                      placeholder="Search for..."
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About id="contact" id1="services" />
      <Services id1="services" />
      <div>
        <Contact id="contact" />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
