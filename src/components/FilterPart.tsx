import React from "react";

import styled from "styled-components";
import { AiOutlineReload } from "react-icons/ai";

import Select from "./Select";
import Toggle from "./Toggle";
import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { reset } from "../features/filterSlice";

const Wrapper = styled.div`
  margin: 20px 5% 20px 7%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Message = styled.div`
  font-size: 16px;
`;

const FilterWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 7%;
`;

const ToggleText = styled.span`
  font-size: 10px;
`;

const Reset = styled.div`
  color: #2196f3;
  font-weight: bold;
`;

const FilterPart = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state: RootState) => state.filter);
  const filterLength = filter.material.length + filter.method.length;

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <Wrapper>
      <Title>들어온 요청</Title>
      <Message>파트너님에게 딱 맞는 요청서를 찾아보세요.</Message>
      <FilterWrapper>
        <Select filtering="가공방식" />
        <Select filtering="재료" />
        {!!filterLength && (
          <Reset onClick={handleResetClick} data-testid="reset">
            <AiOutlineReload /> 필터링 리셋
          </Reset>
        )}
        <ToggleWrapper>
          <Toggle />
          <ToggleText>상담중인 요청만 보기</ToggleText>
        </ToggleWrapper>
      </FilterWrapper>
    </Wrapper>
  );
};

export default FilterPart;
