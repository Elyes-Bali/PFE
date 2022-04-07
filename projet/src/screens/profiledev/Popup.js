import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          <i class="fa fa-close " ></i>
        </span>

        {props.content}
      </div>
    </div>
  );
};

export default Popup;
