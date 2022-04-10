import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

import Item from "./Item";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";

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

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: auto 7%;
  padding-left: 0px;
  justify-content: space-between;
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  border: 1px solid #c2c2c2;
  color: #c2c2c2;
`;

const ItemList = () => {
  const [items, setItems] = useState<IData[]>([]);
  const [filteredItem, setFilteredItem] = useState<IData[] | null>(null);
  const filter = useAppSelector((state: RootState) => state.filter);
  const status = useAppSelector((state: RootState) => state.filter.status);
  const filterLength = filter.material.length + filter.method.length;

  const selectItem = (items: IData[]) => {
    if (status) {
      const selectedItem = items?.filter((item) => item.status === "상담중");
      return selectedItem;
    }

    const result: IData[] = [];

    if (filter.material.length && filter.method.length) {
      items?.forEach((item) => {
        let hasMaterial = false;
        let hasMethod = false;

        for (const material of item.material) {
          if (filter.material.includes(material)) {
            hasMaterial = true;
          }
        }

        for (const method of item.method) {
          if (filter.method.includes(method)) {
            hasMethod = true;
          }
        }

        if (hasMaterial && hasMethod) {
          result.push(item);
        }
      });

      return result;
    }

    items?.forEach((item) => {
      for (const material of item.material) {
        if (filter.material.includes(material)) {
          return result.push(item);
        }
      }

      for (const method of item.method) {
        if (filter.method.includes(method)) {
          return result.push(item);
        }
      }
    });

    return result;
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        const { data }: { data: IData[] } = await axios.get(
          "http://localhost:4000/requests"
        );

        setItems(data);
        setFilteredItem(data);
      } catch (error) {
        console.error(error);
      }
    };

    getItem();
  }, []);

  useEffect(() => {
    const result: IData[] =
      filterLength !== 0 || status ? selectItem(items)! : items;

    setFilteredItem(result);
  }, [filter]);

  return (
    <Wrapper>
      {filteredItem?.length ? (
        filteredItem?.map((item) => <Item item={item} />)
      ) : (
        <Empty>조건에 맞는 견적요청이 없습니다.</Empty>
      )}
    </Wrapper>
  );
};

export default ItemList;
