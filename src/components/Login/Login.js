import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
  };
  const register = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Link to="/">
        <Logo src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></Logo>
      </Link>
      <LoginBox>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton onClick={signIn}>Sign In</SignInButton>
        </form>
        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and
          <a href="#"> Privacy Notice</a>.
        </p>
        <RegisterButton onClick={register}>
          Create your Amazon acount
        </RegisterButton>
      </LoginBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 100px;
  margin: 20px auto;
`;

const LoginBox = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

const SignInButton = styled.button`
  background: #f0c14b;
  border: 1px solid;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  cursor: pointer;
`;

const RegisterButton = styled.button`
  border: 1px solid;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-color: darkgray;
`;
