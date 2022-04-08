import React, { useState, useEffect } from "react";
import Header from "./Header";
import Item from "./Item";
import FilterPart from "./FilterPart";

import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: auto 30% auto 30%;
`;

export interface IData {
  id: number;
  due: string;
  amount: number;
  client: string;
  count: number;
  material: string[];
  method: string[];
  status: string;
  title: string;
}

const DashBoard = () => {
  const [items, setItems] = useState<IData[] | null>(null);

  useEffect(() => {
    const getItem = async () => {
      const { data }: { data: IData[] } = await axios.get(
        "http://localhost:4000/requests"
      );
      console.log(data);

      setItems(data);
    };

    getItem();
  }, []);
  return (
    <Container>
      <Header />
      <FilterPart />
      <ul>
        {items?.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </Container>
  );
};

export default DashBoard;
