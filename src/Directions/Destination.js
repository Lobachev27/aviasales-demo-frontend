import React from "react";
import styled from "styled-components";

const Destination = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  border-radius: 8px 8px 0 0;
  color: #5b5b5c;
  padding-bottom: 12px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  margin-top: 12px;

  @media (min-width: 768px) {
    border-radius: 12px 12px 0 0;
    padding-bottom: 16px;
    margin-top: 25px;
  }

  @media (min-width: 1024px) {
    border-radius: 8px 8px 0 0;
    margin-top: 31px;
  }
`;

const Overlay = styled.img`
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Flag = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  margin-left: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Block = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0px 8px 0 8px;

  @media (min-width: 768px) {
    margin: 0px 16px 0 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  box-sizing: border-box;
`;

const CityText = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const PriceText = styled.div`
  color: #00bae8;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const CountryText = styled.div`
  color: #a0b0b9;
`;

const DateText = styled.div`
  color: #a0b0b9;
`;

export default props => {
  return (
    <Destination>
      <Overlay src={props.destination.img} />
      <InfoBlock>
        <Flag src={props.destination.flag} />
        <Block>
          <Container>
            <CityText>{props.destination.city}</CityText>
            <PriceText>Найти от {props.destination.price} &#x20BD;</PriceText>
          </Container>
          <Container>
            <CountryText>{props.destination.country}</CountryText>
            <DateText>{props.destination.date}</DateText>
          </Container>
        </Block>
      </InfoBlock>
    </Destination>
  );
};
