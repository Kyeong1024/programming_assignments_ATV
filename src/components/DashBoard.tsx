import React, { useState, useEffect } from "react";
import Header from "./Header";
import Item from "./Item";

import axios from "axios";

interface IData {
  id: number;
  due: string;
  amount: number;
  client: string;
  count: 1;
  meterial: string[];
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
      setItems(data);
    };

    getItem();
  }, []);
  return (
    <div>
      <Header />
      <h3>들어온 요청</h3>
      <h4>파트너님에게 딱 맞는 요청서를 찾아보세요.</h4>
      <select>
        <input type="checkbox" value="밀링" name="밀링" />
        <input type="checkbox" value="선반" name="선반" />
      </select>

      <ul>
        {items?.map((item) => (
          <li id={`${item.id}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashBoard;
