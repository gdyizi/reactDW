import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html, body, input, div, h1, h2, h3, h4, h5, h6, ul, li, ol, dl, dt, dd, p{
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: normal;
  }
  ul, li, ol, dl, dt, dd{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  body>a:last-child{
    display: none;
  }
  img{
    display: block;
  }
  body{
    background: #f3f3f3;
    font-family:Helvetica;
  }
`;
