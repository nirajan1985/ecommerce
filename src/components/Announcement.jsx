import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;

const Announcement = () => {
  return <Container>Opening offer ! 20% discount on all takeaway</Container>;
};

export default Announcement;
