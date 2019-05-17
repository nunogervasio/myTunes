import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=PT+Sans");

/* CSS Variables */
:root {
  --primary-color: #b90415;
  --primary-color-hover: #d3071b;
  --secondary-color: #103063;
  --secondary-color-hover: #143f85;
  --light-color: #f4f4f4;
}

body {
  font-family: "PT Sans", sans-serif;
  ${"" /* background-color: #252529; */}
  margin: 0;
  ${"" /* color: #fff; */}
  line-height: 1.6;
}

img {
  width: 100%;
}



`;

export default GlobalStyle;
