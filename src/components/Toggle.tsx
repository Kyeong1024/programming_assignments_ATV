import React from "react";

import styled from "styled-components";

import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { changeStatus } from "../features/filterSlice";

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 10px;
  background: #c2c2c2;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    background: #f5f5f5;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 10px;
  width: 34px;
  height: 14px;
  &:checked + ${CheckBoxLabel} {
    background: #bbdefb;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      background: #2196f3;
      margin-left: 21px;
      transition: 0.4s;
    }
  }
`;

const Toggle = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.filter.status);

  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        defaultChecked={status}
        onChange={() => dispatch(changeStatus())}
        data-testid="status"
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default Toggle;
