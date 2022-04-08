import React, { useState } from "react";
import { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addMethod,
  deleteMethod,
  addMaterial,
  deleteMaterial,
} from "../features/filterSlice";

import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  padding: 7px;
  border: 2px solid #939fa5;
  border-radius: 4px;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
  padding: 7px;
  margin-top: 3px;
  background: white;
`;

interface IOptions {
  [key: string]: string[];
}

const Options: IOptions = {
  재료: ["알루미늄", "탄소강", "구리", "합금강", "강철"],
  가공방식: ["밀링", "선반"],
};

const Select = ({ filtering }: { filtering: string }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) =>
    filtering === "재료" ? state.filter.material : state.filter.method
  );

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      filtering === "재료"
        ? dispatch(addMaterial(e.target.name))
        : dispatch(addMethod(e.target.name));

      return;
    }

    filtering === "재료"
      ? dispatch(deleteMaterial(e.target.name))
      : dispatch(deleteMethod(e.target.name));
  };

  return (
    <div>
      <FilterTitle onClick={toggleExpanded}>
        {filtering} {filter.length ? `(${filter.length})` : ""}{" "}
        <AiFillCaretDown />
      </FilterTitle>
      {expanded && (
        <FilterOptions>
          {Options[filtering].map((method) => (
            <label htmlFor="one" className="block" key={method}>
              <input
                type="checkbox"
                name={method}
                value={method}
                onChange={handleCheckChange}
                checked={filter.includes(method)}
              />
              {method}
            </label>
          ))}
        </FilterOptions>
      )}
    </div>
  );
};

export default Select;
