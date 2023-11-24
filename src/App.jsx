import { useState } from "react";
import UserInput from "./components/UserInput";

import Results from "./components/Results";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  return (
    <>
      <UserInput setInputValues={setInputValues} />
      <Results inputValues={inputValues} />
    </>
  );
}

export default App;
