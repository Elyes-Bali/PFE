import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [countrie, setCountrie] = useState();
  const country = [
    "Afghanistan",
    "Akrotiri",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Australia",
    "Belgium",
    "Bolivia",
    "Brazil",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Denmark",
    "Egypt",
    "Estonia",
    "Europa Island",
    "Finland",
    "France",
    "Gabon",
    "Germany",
    "Greece",
    "Greenland",
    "Iceland",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Libya",
    "Malaysia",
    "Morocco",
    "Netherlands",
    "New Zealand",
    "Philippines",
    "Spain",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tunisia",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Yemen",
    "other",
  ];

  return (
    <div className="login-jpj">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          {/* Login Form */}
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon" /> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign In"
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            {/* sign up part */}
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Name
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="lastName" className="label">
                  lastName
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>

              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Countrie
                </label>
                <select
                  className="input"
                  onChange={(e) => setCountrie(e.target.value)}
                >
                  <option value="">-- Choose your Countrie --</option>
                  {country.map((el) => (
                    <option className="option" value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Profession
                </label>
                <select
                  className="input"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option className="option" value="">
                    profession
                  </option>
                  <option className="option" value="Client">
                    Client
                  </option>
                  <option className="option" value="Doctor">
                    Freelancer
                  </option>
                </select>
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign Up"
                 
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
