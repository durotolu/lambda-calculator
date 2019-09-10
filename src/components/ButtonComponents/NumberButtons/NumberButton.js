import React from "react";
//import { numbers } from "../../../data";

const NumberButton = (props) => {
  const {number} = props;
  return (
    <button>{number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;