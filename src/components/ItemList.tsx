import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import styled from "styled-components";

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

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  margin: auto 7%;
  justify-content: space-between;
`;

const ItemList = () => {
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
    <Wrapper>
      {items?.map((item) => (
        <Item item={item} />
      ))}
    </Wrapper>
  );
};

export default ItemList;
