import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/m5KxyljRNbc0W3jr/pbf06868-YBgMPD11kXHZNEqD.jpg")
      center no-repeat;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  width: 25%;
  ${Mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: teal;
  color: white;
  width: 40%;
  cursor: pointer;
  margin: 10px 0px;
`;
const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  font-size: 12px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
