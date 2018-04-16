import React from "react";
import styled from "styled-components";

import compass from "./compass.svg";
import pen from "./pen.svg";
import earth from "./earth.svg";
import palm from "./palm.svg";
import cart from "./cart.svg";
import temple from "./temple.svg";
import glass from "./glass.svg";
import baby from "./baby.svg";

import Destination from "./Destination";
import krasnodar from "./city-krasnodar.jpg";
import sochi from "./city-sochi.jpg";
import spb from "./city-spb.jpg";
import minvody from "./city-minvody.jpg";
import simferopol from "./city-simferopol.jpg";
import barcelona from "./city-barcelona.jpg";
import flag_ru from "./flag-ru.png";
import flag_es from "./flag-es.png";

const destination = [
  {
    img: krasnodar,
    city: "Краснодар",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1212,
    date: "18 марта"
  },
  {
    img: sochi,
    city: "Сочи (Адлер)",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1334,
    date: "27 марта"
  },
  {
    img: spb,
    city: "Санкт-Петербург",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1508,
    date: "19 февраля"
  },
  {
    img: minvody,
    city: "Минеральные воды",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 2074,
    date: "13 марта"
  },
  {
    img: simferopol,
    city: "Симферополь (Крым)",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 2407,
    date: "13 марта"
  },
  {
    img: barcelona,
    city: "Барселона",
    country: "ИСПАНИЯ",
    flag: flag_es,
    price: 4247,
    date: "24 марта"
  }
];

const Directions = styled.div`
  background: #f8fcff;
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 56px;
  }
`;

const Compass = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  display: flex;
`;

const Title = styled.h2`
  color: #4a4a4a;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-weight: 700;
  margin: 24px 0px 0px 0px;
  padding: 0px 30px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    padding: 0px 10px;
  }
`;

const OriginCity = styled.span`
  color: #00ace2;
  font-weight: 400;
  white-space: nowrap;
`;

const Img = styled.img`
  cursor: pointer;
  width: ${props => (props.edit ? "16px" : "22px")};
  height: ${props => (props.edit ? "16px" : "22px")};
`;

const Ways = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  border-bottom: none;
  color: #00ace2;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  border-bottom: 1px solid #f8fcff;

  &:hover {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
    cursor: pointer;
  }
`;

const WhiteCircle = styled.div`
  padding: 13px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  margin: 24px auto 12px auto;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 48px auto 12px auto;
  }
`;

const Destinations = styled.div`
  padding-top: 18px;

  @media (min-width: 768px) {
    pading-top: 34px;
  }

  @media (min-width: 992px) {
    padding-top: 28px;
  }
`;

export default () => (
  <Directions>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-md-8 col-lg-6">
          <Compass src={compass} alt="compass" />
          <Title>
            Популярные направления перелетов из города{" "}
            <OriginCity>
              Москва <Img edit src={pen} />
            </OriginCity>
          </Title>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
          <Ways>
            <div className="col-xs-4 col-md-2">
              <Button>
                <WhiteCircle>
                  <Img src={earth} />
                </WhiteCircle>
                КУДА<br />УГОДНО
              </Button>
            </div>
            <div className="col-xs-4 col-md-2">
              <Button>
                <WhiteCircle>
                  <Img src={palm} />
                </WhiteCircle>
                CОЛНЦЕ<br />И МОРЕ
              </Button>
            </div>
            <div className="col-xs-4 col-md-2">
              <Button>
                <WhiteCircle>
                  <Img src={cart} />
                </WhiteCircle>
                ШОПИНГ,<br />ГОРОД
              </Button>
            </div>
            <div className="col-xs-4 col-md-2">
              <Button>
                <WhiteCircle>
                  <Img src={temple} />
                </WhiteCircle>
                КУЛЬТУРА<br />И ИСТОРИЯ
              </Button>
            </div>
            <div className="col-xs-4 col-md-2">
              <Button>
                <WhiteCircle>
                  <Img src={glass} />
                </WhiteCircle>
                НОЧНАЯ<br />ЖИЗНЬ
              </Button>
            </div>
            <div className="col-xs-4 col-md-2">
              <Button>
                <WhiteCircle>
                  <Img src={baby} />
                </WhiteCircle>
                ОТДЫХ<br />С ДЕТЬМИ
              </Button>
            </div>
          </Ways>
        </div>
      </div>
      <Destinations>
        <div className="row center-md">
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <Destination destination={destination[0]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <Destination destination={destination[1]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <Destination destination={destination[2]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <Destination destination={destination[3]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <Destination destination={destination[4]} />
          </div>
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
            <Destination destination={destination[5]} />
          </div>
        </div>
      </Destinations>
    </div>
  </Directions>
);
