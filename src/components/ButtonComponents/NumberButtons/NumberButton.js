import React from "react";
//import { numbers } from "../../../data";

const NumberButton = (props) => {
  const {number, numberStyle, zeroStyle, zero, displayFunc} = props;
  return (
    <button onClick={evt => displayFunc(number)} style={numberStyle}>{number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;