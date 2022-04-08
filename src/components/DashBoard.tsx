import React from "react";
import Header from "./Header";
import FilterPart from "./FilterPart";

import styled from "styled-components";
import ItemList from "./ItemList";

const Container = styled.div`
  padding: auto 30% auto 30%;
`;

const DashBoard = () => {
  return (
    <Container>
      <Header />
      <FilterPart />
      <ItemList />
    </Container>
  );
};

export default DashBoard;
