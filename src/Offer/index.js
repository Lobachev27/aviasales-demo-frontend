import React from "react";
import styled from "styled-components";

import SpecialOffer from "./SpecialOffer";

import pobeda from "./pobeda.png";
import lufthansa from "./lufthansa.png";
import icon from "./icon.png";

const offers = [
  {
    name: "Билеты от 499 рублей!",
    partner: pobeda,
    price: 499,
    days: 45,
    text: "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    name: "В Нью-Йорк от 20680 ₽",
    img: icon,
    partner: lufthansa,
    price: 20680,
    days: 19,
    text:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    name: "В Лос-Анджелес от 22360 ₽",
    img: icon,
    partner: lufthansa,
    price: 22360,
    days: 19,
    text:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

const Offer = styled.div`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  color: #ffffff;
  padding-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 33px;
  font-weight: 500;
  padding: 16px 0 24px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 42px;
    padding: 24px 0 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
  }
`;

const Link = styled.a`
  color: inherit;
  transition: color 0.3s;
  &:hover {
    color: #fd8a27;
  }
`;

const StarNote = styled.div`
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export default () => {
  return (
    <Offer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl col-xl-offset-1">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xl-10 col-xl-offset-1">
            <div className="row between-xl">
              <div className="col-xs-12 col-md-4 col-xl-4">
                <SpecialOffer offer={offers[0]} />
              </div>
              <div className="col-xs-12 col-md-4 col-xl-4">
                <SpecialOffer offer={offers[1]} />
              </div>
              <div className="col-xs-12 col-md-4 col-xl-4">
                <SpecialOffer offer={offers[2]} />
              </div>
            </div>
            <Footer>
              <Link href="#">Смотреть все спецпредложения</Link>
              <StarNote>
                <sup>*</sup>средняя цена по направлению
              </StarNote>
            </Footer>
          </div>
        </div>
      </div>
    </Offer>
  );
};
