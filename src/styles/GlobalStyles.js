import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/color';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background:${colors.lightBlue};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primary};
    border: none;
    color: #FFF;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  ul {
    list-style: none;
  }

  h1 {
    color: #5d5d62;
  }
`;

export const Container = styled.section`
  max-width: 460px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 30px;
  -webkit-border-radius:10px;
	-moz-border-radius:10px;
	border-radius: 10px;
	margin: 0 auto;
	margin-top: 120px;
	text-align: center;
`;

export const Form = styled.form`
margin-top: 20px;
input, select, option{
  padding: 0 10px;
  color:#696969;
	height: 40px;
	width: 80%;
	font-size: 18px;
	margin-bottom: 10px;
	background-color: rgba(255,255,255,0.5);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
	border: none;
	background-repeat: no-repeat;
	background-position: 10px;

  &:focus {
  border: 1px solid ${colors.lightBlue};
  background-color:#fff;
  }
}
input:hover, select:hover {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

button {
    border: none;
    border-radius: 4px;
    outline: none;
    text-transform: uppercase;
    width: 80%;
    padding: 15px 0;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    background-image: linear-gradient(to right top, #2d3f4e, #3f4855, #4f535c, #5d5d62, #696969);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    cursor: pointer;
    transition: all 300ms;
}

button:hover {
  filter: brightness(75%);
}
`;
