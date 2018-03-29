import React from "react";
import styled from "styled-components";

import fly from "./fly.png";
import dog from "./dog.png";
import items from "./items.png";

const Help = styled.section`
  padding-top: 20px;
  padding-bottom: 24px;
  background: #fff;
  min-width: 320px;
`;

const Title = styled.h5`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: #4a4a4a;
  margin: 0px;
  padding-left: 10px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: #4a4a4a;
  margin-top: 12px;
  margin-bottom: 16px;
  
  @media (min-width: 992px) {
    margin-bottom: 24px;
  }
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: #00ace2;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
`;

const Header = styled.div`
  display: flex;
`;

export default function() {
  return (
    <Help>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-offset-1 col-lg-10">
            <Header>
              <Img src={fly} alt="" title="" />
              <Title>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Title>
            </Header>
            <Text>
              Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
              самолет по сотням авиакомпаний и находим за считанные минуты самые
              дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
              нашим поиском, который совершенно бесплатно сравнивает цены на
              авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
              смысла ходить в авиакассы, обзванивать агентства — дешевый билет
              находится на расстоянии клика. На нашем сайте вы можете подобрать
              дешевые билеты на самолет в Европу, Азию и на другие континенты.
              Мы написали для вас простую инструкцию о том, как пользоваться
              поиском и экономить на перелетах от 1000 до 20000 руб в год.{" "}
              <Link>Подробнее</Link>
            </Text>
            <Header>
              <Img src={dog} alt="" title="" />
              <Title>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Title>
            </Header>
            <Text>
              Электронный авиабилет — это, по сути, обычный билет на самолет, но
              только в менее привычном для путешественника виде. Вся информация
              об авиаперелете (данные пассажира, маршрут следования) хранится в
              электронной базе, а пассажир получает на руки маршрут-квитанцию.
              Некоторые пассажиры, купив авиабилет онлайн и получив
              маршрут-квитанцию, удивлены ее видом — это обыкновенный лист
              формата А4, на котором распечатана вся информация о предстоящем
              перелете. Однако это действительно официальный документ,
              подтверждающий договор между авиаперевозчиком и пассажиром. При
              регистрации на рейс пассажир должен предъявить маршрут-квитанцию
              вместе с удостоверением личности точно так же, как предъявляют
              обыкновенный бумажный билет. Следует отметить, что электронный
              билет, приобретенный онлайн, стоит дешевле своего бумажного
              аналога. <Link>Подробнее</Link>
            </Text>
            <Header>
              <Img src={items} alt="" title="" />
              <Title>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Title>
            </Header>
            <Text>
              Есть масса путеводителей по странам, но ни одного о том, как
              провести время в самолете. Для того, чтобы сделать ваш перелет
              максимально комфортным, мы написали 20 советов о подготовке к
              путешествию. Ведь настоящее путешествие начинается со слов «Добро
              пожаловать на борт нашего самолета»! <Link>Подробнее</Link>
            </Text>
          </div>
        </div>
      </div>
    </Help>
  );
}