import React from "react";
import styled from "styled-components";
import "./App.css";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import { ContextProvider } from "./Context/ContextProvider";
import ShowCarDetail from "./components/DisplayComponent/ShowCarDetail";

function App() {
  return (
    <ContextProvider>
      {/* <Container>
        <DisplayComponent />
      </Container> */}
      <FilterComponent />
      <Div>
        <ShowCarDetail />
      </Div>
    </ContextProvider>
  );
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  max-width: 105em;
  padding-top: 5%;
  margin: auto;
`;

const Div = styled.div`
  width: 95%;
  margin: auto;
  padding: 2.5% 0;
`;

export default App;
