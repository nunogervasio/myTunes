import React from "react";
import { NavMenu } from "./nav";
import styled from "styled-components";
import Showcase from "./showcase";
import GlobalStyle from "./GlobalStyle";
import "./App.css";

function App() {
  return (
    <div>
      <NavMenu />
      <Showcase />
      <Showcase />
      <GlobalStyle />
    </div>
  );
}

export default App;
