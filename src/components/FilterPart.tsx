import React from "react";
import Select from "./Select";
import Toggle from "./Toggle";

import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 7%;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const Message = styled.div`
  font-size: 13px;
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

const FilterPart = () => {
  return (
    <Wrapper>
      <Title>들어온 요청</Title>
      <Message>파트너님에게 딱 맞는 요청서를 찾아보세요.</Message>
      <FilterWrapper>
        <Select filtering="가공방식" />
        <Select filtering="재료" />
        <ToggleWrapper>
          <Toggle />
          <ToggleText>상담중인 요청만 보기</ToggleText>
        </ToggleWrapper>
      </FilterWrapper>
    </Wrapper>
  );
};

export default FilterPart;
