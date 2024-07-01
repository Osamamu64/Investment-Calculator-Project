import { useState } from "react";

import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {!inputIsValid && (
        <p className="center">Please enter a valid duration more than 0</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
