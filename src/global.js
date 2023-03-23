import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button {
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #fafaf9;
    color: #292524;
    padding: 16px;
  }

  a {
    text-decoration: none;
    color: #44403c;
  }

  a:hover {
    color: #a8a29e;
    transition: .2s;
  }

  button {
    cursor: pointer;
  }
`;