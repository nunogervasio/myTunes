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
*{
  box-sizing:border-box

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

a {
  text-decoration: none;
  color: #ccc;
}
#music:target,
#video:target,
#showcase:target,
#gift-cards:target {
    padding-top: 51px;
    @media (max-width: 576px){
    padding-top: 45px;
  }
  }


`;

export default GlobalStyle;
