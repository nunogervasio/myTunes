import React from "react";
import { NavMenu } from "./nav";
import styled from "styled-components";
import Showcase from "./showcase";
import MusicSection from "./musicSection";
import VideoSection from "./videoSection";
import EntertainmentSection from "./entertainmentSection";
import GiftCardsSection from "./giftCardsSection";
import GlobalStyle from "./GlobalStyle";
import "./App.css";

function App() {
  return (
    <div>
      <NavMenu />
      <Showcase />
      <MusicSection />
      <VideoSection />
      <EntertainmentSection />
      <GiftCardsSection />
      <GlobalStyle />
    </div>
  );
}

export default App;
