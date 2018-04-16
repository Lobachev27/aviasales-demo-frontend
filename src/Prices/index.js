import React from "react";
import styled from "styled-components";

import BestPrice from "./BestPrice";
import calendar from "./calendar-second.svg";
import flag_ru from "./flag-ru.png";
import flag_am from "./flag-am.png";
import flag_md from "./flag-md.png";

const bestPrices = [
  {
    destination: {
      city: "Симферополь (Крым)",
      country: "РОССИЯ",
      flag: flag_ru
    },
    prices: [
      { origin: "Москвы", price: 4813 },
      { origin: "Санкт-Петербурга", price: 7857 },
      { origin: "Новосибирска", price: 15127 },
      { origin: "Екатеринбурга", price: 9275 },
      { origin: "Челябинска", price: 9148 }
    ]
  },
  {
    destination: { city: "Ереван", country: "АРМЕНИЯ", flag: flag_am },
    prices: [
      { origin: "Москвы", price: 6758 },
      { origin: "Санкт-Петербурга", price: 9932 },
      { origin: "Сочи", price: 11951 },
      { origin: "Краснодара", price: 11741 },
      { origin: "Ростова-на-Дону", price: 11956 }
    ]
  },
  {
    destination: { city: "Кишинёв", country: "МОЛДАВИЯ", flag: flag_md },
    prices: [
      { origin: "Москвы", price: 8319 },
      { origin: "Санкт-Петербурга", price: 10800 },
      { origin: "Краснодара", price: 12098 },
      { origin: "Сургута", price: 16277 },
      { origin: "Нового Уренгоя", price: 15987 }
    ]
  }
];

const Prices = styled.div`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  padding-top: 32px;
  margin: 0;
`;

const Calendar = styled.img`
  width: 60px;
  height: 60px;
  margin: 40px auto 0;
  display: flex;
`;

const Title = styled.h2`
  color: #4a4a4a;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  margin: 20px 0px 0px 0px;
  padding: 0px 30px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const SplitLine = styled.div`
  border-bottom: 1px dashed #afbec6;
  margin: 0px;

  @media (min-width: 1200px) {
    border: none;
    border-right: 1px dashed #afbec6;
    min-height: 80%;
    width: 1px;
    margin: 24px auto;
  }
`;

const Info = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Offer = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: #a0b0b9;
  padding: 0 10px 30px;

  @media (min-width: 768px) {
    padding: 0 0 60px;
  }

  @media (min-width: 1200px) {
    padding: 0 0 75px;
  }
`;

export default () => {
  return (
    <Prices>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10">
            <Calendar src={calendar} alt="Calendar" />
            <Title>Лучшие цены на авиабилеты за последний месяц</Title>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10 col-xl-3 col-xl-offset-1">
            <BestPrice data={bestPrices[0]} />
          </div>
          <div className="col-xs-12 col-md-10 col-xl">
            <SplitLine />
          </div>
          <div className="col-xs-12 col-md-10 col-xl-3">
            <BestPrice data={bestPrices[1]} />
          </div>
          <div className="col-xs-12 col-md-10 col-xl">
            <SplitLine />
          </div>
          <div className="col-xs-12 col-md-10 col-xl-3">
            <BestPrice data={bestPrices[2]} />
          </div>
          <div className="hidden-xs col-xl-1" />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xl-6 col-xl-offset-3">
            <Info>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Info>
            <Offer>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </Offer>
          </div>
        </div>
      </div>
    </Prices>
  );
};
