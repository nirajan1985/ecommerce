import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { Mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
  ${Mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${Mobile({ width: "80%" })};
`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Keep updated about our new offers!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
