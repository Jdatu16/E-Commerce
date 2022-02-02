import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
body{
    margin: 0;
    padding: 0;
    background-color: rgb(236, 236, 236);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    @media only screen and (max-width: 620px) {
    overflow: ${(props) =>
      props.toggleSideMenu === "open" ? "hidden" : "visible"};
  }
}
`;

export default GlobalStyle;
