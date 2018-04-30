import React from "react";
import styled from "styled-components";

const Block = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cd2027;
`;

const OfferName = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  padding: 22px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Logo = styled.img`
  flex: 0 0 auto;
  margin-right: 16px;

  @media (min-width: 768px) {
    margin-right: 8px;
  }

  @media (min-width: 1024px) {
    margin-right: 12px;
  }
`;

const Body = styled.div`
  color: #242424;
  background: #ffffff;
  padding: 20px 12px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const ImageWrapper = styled.div`
  flex: 0 1 auto;
`;

const Image = styled.img`
  width: 100%;
`;

const PriceDayWrapper = styled.div`
  flex: 0 0 auto;
`;

const Price = styled.div`
  text-align: right;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const PriceSpan = styled.span`
  font-size: 20px;
  line-height: 16px;
  font-weight: 400;
`;

const Days = styled.div`
  text-align: right;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  color: #d93633;
`;

const OfferText = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  padding: 16px 0;
  margin: 0;
  min-height: 48px;
`;

const Link = styled.a`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  display: block;
  border: 2px solid #cd1f27;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  color: #cd1f27;
  text-decoration: none;
  text-align: center;
  padding: 10px 0;
`;

export default props => {
  return (
    <Block>
      <Header>
        <OfferName>{props.offer.name}</OfferName>
        <Logo src={props.offer.img} alt="" />
      </Header>
      <Body>
        <Details>
          <ImageWrapper>
            <Image src={props.offer.partner} alt="" />
          </ImageWrapper>
          <PriceDayWrapper>
            <Price>
              от<PriceSpan> {props.offer.price} ₽</PriceSpan>
            </Price>
            <Days>Осталось {props.offer.days} дней</Days>
          </PriceDayWrapper>
        </Details>
        <OfferText>{props.offer.text}</OfferText>
        <Link href="#">Узнать подробности</Link>
      </Body>
    </Block>
  );
};
