import React from "react";

const OperatorButton = (props) => {
  const {operator, operatorStyle} = props;
  return (
    <button style={operatorStyle}>{operator}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;