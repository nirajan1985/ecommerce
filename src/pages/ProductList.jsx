import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { Mobile } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${Mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${Mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${Mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dishes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Dishes:</FilterText>
          <Select>
            <Option selected disabled>
              Type
            </Option>
            <Option>Chicken</Option>
            <Option>Lamb</Option>
            <Option>Biff</Option>
            <Option>Vegeterian</Option>
          </Select>
          <Select>
            <Option selected disabled>
              Taste
            </Option>
            <Option>Mild</Option>
            <Option>Medium</Option>
            <Option>Strong</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Dishes:</FilterText>
          <Select>
            <Option selected disabled>
              Price
            </Option>
            <Option>ascending</Option>
            <Option>descending</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
