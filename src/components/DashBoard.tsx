import React, { useState, useEffect } from "react";
import Header from "./Header";
import Item from "./Item";
import Select from "./Select";

import axios from "axios";

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
    <div>
      <Header />
      <h3>들어온 요청</h3>
      <h4>파트너님에게 딱 맞는 요청서를 찾아보세요.</h4>
      <Select filtering="가공방식" />
      <Select filtering="재료" />
      <ul>
        {items?.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DashBoard;
