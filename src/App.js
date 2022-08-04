import React from "react";
import KeyBody from "./Components/body/body";
import Header from "./Components/Header/Header";
import Results from "./Components/Results/Results";
import RContext from "./Result_Context";
function App() {
  return (
    <RContext>
      <Header />
      <Results />
      <KeyBody />
    </RContext>
  )
}

export default App;
