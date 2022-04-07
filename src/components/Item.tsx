import React from "react";
import { IData } from "./DashBoard";

import styled from "styled-components";

const Card = styled.div``;
const Title = styled.div``;
const Client = styled.div``;
const Date = styled.div``;
const Header = styled.div``;
const Line = styled.hr``;
const ContentWrapper = styled.div``;
const Content = styled.div``;
const ContentText = styled.span``;
const RequestButton = styled.button``;
const ChattingButton = styled.button``;
const Status = styled.div``;

const Item = ({ item }: { item: IData }) => {
  return (
    <Card>
      <Header>
        <Title>
          {item.title}
          {item.status === "상담중" && <Status>{item.status}</Status>}
        </Title>
        <Client>{item.client}</Client>
        <Date>{item.due}</Date>
      </Header>
      <Line />
      <ContentWrapper>
        <Content>
          <ContentText>도면개수</ContentText>
          <ContentText>{item.count}</ContentText>
        </Content>
        <Content>
          <ContentText>총 수량</ContentText>
          <ContentText>{item.amount}</ContentText>
        </Content>
        <Content>
          <ContentText>가공방식</ContentText>
          <ContentText>
            {item.method.map((name, i) =>
              item.method.length - 1 === i ? name : name + ","
            )}
          </ContentText>
        </Content>
        <Content>
          <ContentText>재료</ContentText>
          {item.material.map((name, i) =>
            item.material.length - 1 === i ? name : name + ","
          )}
        </Content>
      </ContentWrapper>
      <RequestButton>요청 내역 보기</RequestButton>
      <ChattingButton>채팅하기</ChattingButton>
    </Card>
  );
};

export default Item;
