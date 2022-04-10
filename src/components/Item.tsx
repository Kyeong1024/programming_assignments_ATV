import React from "react";

import styled from "styled-components";

import { IData } from "./ItemList";

const Card = styled.li`
  display: flex;
  width: 356px;
  height: 356px;
  flex-direction: column;
  border: 2px solid #e5e5e5;
  justify-content: center;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 4px;

  &:hover {
    border: 2px solid #2196f3;
  }
`;

const Header = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
`;

const Status = styled.span`
  display: flex;
  width: 50px;
  height: 24px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;

const Client = styled.div`
  font-size: 14px;
`;

const Date = styled.div`
  padding-top: 20px;
  font-size: 14px;
  color: #939fa5;
  &::after {
    content: "";
    display: block;
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const ContentText = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

const RequestButton = styled.button`
  width: 108px;
  height: 32px;
  background: #2196f3;
  border: 2px solid #2196f3;
  border-radius: 4px;
  color: white;
`;

const ChattingButton = styled.button`
  width: 78px;
  height: 32px;
  margin-left: 10px;
  background: white;
  border: 2px solid #2196f3;
  border-radius: 4px;
  color: #2196f3;
`;

const IN_CONSULTATION = "상담중";

const Item = ({ item }: { item: IData }) => {
  return (
    <Card key={item.id}>
      <Header>
        <Title>
          {item.title}
          {item.status === IN_CONSULTATION && <Status>{item.status}</Status>}
        </Title>
        <Client>{item.client}</Client>
        <Date>{item.due}</Date>
      </Header>
      <ContentWrapper>
        <Content>
          <ContentText>도면개수</ContentText>
          <ContentText>총 수량</ContentText>
          <ContentText>가공방식</ContentText>
          <ContentText>재료</ContentText>
        </Content>
        <Content>
          <ContentText>{item.count}</ContentText>
          <ContentText>{item.amount}</ContentText>
          <ContentText>
            {item.method.map((name, i) =>
              item.method.length - 1 === i ? name : name + ","
            )}
          </ContentText>
          <ContentText>
            {item.material.map((name, i) =>
              item.material.length - 1 === i ? name : name + ","
            )}
          </ContentText>
        </Content>
      </ContentWrapper>
      <ButtonWrapper>
        <RequestButton>요청 내역 보기</RequestButton>
        <ChattingButton>채팅하기</ChattingButton>
      </ButtonWrapper>
    </Card>
  );
};

export default Item;
