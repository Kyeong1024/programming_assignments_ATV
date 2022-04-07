import React, { useState } from "react";
import { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addMethod,
  deleteMethod,
  addMaterial,
  deleteMaterial,
} from "../features/filterSlice";
// import styled from "styled-components";

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
      <div onClick={toggleExpanded}>
        <div>
          {filtering} {filter.length ? `(${filter.length})` : ""}
        </div>
      </div>
      {expanded && (
        <div>
          {Options[filtering].map((method) => (
            <label htmlFor="one" className="block" key={method}>
              <input
                type="checkbox"
                name={method}
                value={method}
                onChange={handleCheckChange}
                checked={filter.includes(method)}
                // className="m-3 cursor-pointer"
              />
              {method}
            </label>
          ))}
        </div>
      )}
      {/* <div onClick={toggleExpanded}>
        <h6>PLATFORMS </h6>
        <div className={`${expanded ? "up-arrow" : "down-arrow"}`}>
          {selections.length
            ? selections.map((name, i) => (
                <span key={i}>
                  {i ? ", " : null}
                  {name}
                </span>
              ))
            : "None selected"}
        </div>
      </div>
      {expanded && (
        <div className="border-gray-200 border border-solid">
          {PLATFORMS.map((platform) => (
            <label htmlFor="one" className="block" key={platform}>
              <input
                type="checkbox"
                name={platform}
                value={platform}
                onChange={handleChange}
                className="m-3 cursor-pointer"
              />
              {platform}
            </label>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Select;
