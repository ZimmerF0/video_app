import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${props => props.type !== "sm" && "360px"};
  margin-bottom: ${props => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${props => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${props => props.type === "sm" ? "120px" : "202px"};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${props => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${props => props.type === "sm" && "none"};
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src="https://i.pinimg.com/originals/07/f5/24/07f524fd75b463f571235e53888d95ca.png" />
        <Details type={type}>
          <ChannelImage type={type} src="https://i.pinimg.com/originals/d2/b6/d9/d2b6d9f420dd981e2387d7843e75feca.png" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,909 views * 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
