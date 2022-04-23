import React from "react";
import { Spring, animated } from "react-spring";

const Modal = () => {
  return (
    <div>
      <Spring
        loop
        from={{ opacity: 0, color: "white" }}
        to={[
          { opacity: 4, color: "#ffffff" },
          { opacity: 0, color: "rgb(255, 255, 255)" },
        ]}
      >
        {(styles) => (
          <animated.div style={styles}>
            Find available freelancers <br />
            <br /> <i className="fa fa-arrow-down" aria-hidden="true"></i>
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default Modal;
