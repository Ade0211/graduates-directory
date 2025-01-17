import React from "react";
// import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import GithubIcon from "mdi-react/GithubIcon";

export default function Login() {
  return (
    <Wrapper>
      <section className="container">
        <div>
          <h1>Welcome</h1>
          <span>Graduates Directory</span>

          <div className="login-container">
            <a className="login-link" href="http://localhost:3030/oauth/github">
              <GithubIcon />
              <span>Login with GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = Styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 25%;
      height: 45%;
      > h1 {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      > span:nth-child(2) {
        font-size: 1.1rem;
        color: #808080;
        margin-bottom: 70px;
      }
      > span:nth-child(3) {
        margin: 10px 0 20px;
        color: red;
      }
      .login-container {
        background-color: #000;
        width: 70%;
        border-radius: 3px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        > .login-link {
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
            cursor: default;
            display: flex;
            align-items: center;
            height: 40px;
            > span:nth-child(2) {
              margin-left: 5px;
            }
          }
          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
          }
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`;
