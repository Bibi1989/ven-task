import React from "react";
import styled from "styled-components";
import "./App.css";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import { ContextProvider } from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Container>
        <FilterComponent />
        <DisplayComponent />
      </Container>
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

export default App;
