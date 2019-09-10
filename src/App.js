import React, {useState} from "react";
import "./App.css";

// STEP 4 - import the button and display components
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

const numberStyle = {
  backgroundColor: '#1c4378',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  margin: '5px',
  color: 'white',
}

const operatorStyle = {
  backgroundColor: '#2a7292',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  margin: '5px',
  color: 'white',
}

const specialStyle = {
  backgroundColor: '#275d9c',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  margin: '5px',
  color: 'white',
}

const zeroStyle = {
  width: '100px',
}
  // background: '#a51f37',
  // display: #323335
  // 3 special operators: #275d9c
  // numbers: #1c4378
  // operators: #2a7292
  // shadow: #460e14

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  let [totalState, setTotalState] = useState(0);
  let [arrlength, setArrLength] = useState([]);
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing

  const displayFunc = (item) => {
    if ((arrlength.length) > 7) {} else
    {if (totalState === 0) {return setTotalState(totalState = item)}
    setArrLength(arrlength.concat(item));
    return setTotalState(totalState + item)};
  };

  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo className="display" />
      <Display totalState={totalState}/>
      <div className="App">
        <div>
          <Specials specialStyle={specialStyle} />
          <Numbers zeroStyle={zeroStyle} numberStyle={numberStyle} displayFunc={displayFunc} />
        </div>
        <Operators operatorStyle={operatorStyle} />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
