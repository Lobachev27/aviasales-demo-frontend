import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";
import aero from "./aero.svg";
import arrows from "./arrows.svg";
import calendar from "./calendar.svg";
import popdown from "./popdn.svg";

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  justify-content: flex-start;
`;

const Image = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  display: none;
  line-height: 25px;
  font-weight: normal;
  font-size: 20px;
  color: #ffffff;
  margin: 0 0 0 12px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Section = styled.div`
  padding: 80px 0 80px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
  }

  @media (min-width: 992px) {
    line-height: 48px;
    font-size: 40px;
  }
`;

const SubTitle = styled.h2`
  display: none;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    display: block;
    font-size: 24px;
    line-height: 28px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Form = styled.form`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

const InputBig = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 23%;
  }
`;

const InputSmall = styled.div`
  flex-basis: 50%;

  @media (min-width: 768px) {
    flex-basis: 25%;
  }

  @media (min-width: 992px) {
    flex-basis: 15.5%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  color: #4a4a4a;
  background: #ffffff;
  position: relative;
  margin: 1px;
`;

const PlaceInput = styled.input`
  color: inherit;
  padding: 18px 0 18px 16px;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }

  @media (min-width: 992px) {
    padding: 18px 0 18px 10px;
  }
`;

const SwapPlaces = styled.button`
  margin-right: 16px;
  margin-left: 10px;
  border: none;
  width: 30px;
  height: 20px;
  padding: 0;
  background: url(${arrows}) center no-repeat;

  @media (min-width: 992px) {
    margin-right: 15px;
    margin-left: 10px;
  }
`;

const IATACode = styled.span`
  color: #a0b0b9;
`;

const Calendar = styled.button`
  margin-right: 16px;
  margin-left: 10px;
  border: none;
  width: 20px;
  height: 20px;
  padding: 0;
  background: url(${calendar}) center no-repeat;

  @media (min-width: 992px) {
    margin-right: 15px;
    margin-left: 10px;
  }
`;

const PaxButton = styled.button`
  background: #ffffff;
  color: inherit;
  border-radius: inherit;
  border: none;
  padding: 18px 0 18px 16px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  position: relative;

  @media (min-width: 992px) {
    padding: 18px 0 18px 10px;
  }
`;

const PaxAdditional = styled.span`
  color: #a0b0b9;
`;

const PopDownMark = styled.img`
  position: absolute;
  right: 16px;
  top: 0px;
  padding: 28px 0 27px 10px;
  background: url(${popdown}) center no-repeat;

  @media (min-width: 992px) {
    right: 12px;
  }
`;

const SubmitButton = styled.button`
  border-radius: 4px;
  background: #ff9241;
  border: none;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 16px;
  padding: 14px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin-top: 32px;
    padding: 15px;
    font-size: 28px;
  }

  @media (min-width: 992px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export default () => (
  <Header>
    <div className="container">
      <Logo>
        <Image src={logo} alt="logo" />
        <Text> aviasales</Text>
      </Logo>
      <Section>
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
            <Title>Поиск дешевых авиабилетов</Title>
            <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
            <Form>
              <InputBig>
                <InputWrapper>
                  <PlaceInput
                    defaultValue="Москва"
                    placeholder="Город вылета"
                  />
                  <IATACode>MOW</IATACode>
                  <SwapPlaces />
                </InputWrapper>
              </InputBig>
              <InputBig>
                <InputWrapper>
                  <PlaceInput value="" placeholder="Город прибытия" />
                  <IATACode />
                </InputWrapper>
              </InputBig>
              <InputSmall>
                <InputWrapper>
                  <PlaceInput value="" placeholder="Туда" />
                  <Calendar />
                </InputWrapper>
              </InputSmall>
              <InputSmall>
                <InputWrapper>
                  <PlaceInput value="" placeholder="Обратно" />
                  <Calendar />
                </InputWrapper>
              </InputSmall>
              <InputBig>
                <InputWrapper>
                  <PaxButton>
                    1 пассажир, <PaxAdditional>эконом</PaxAdditional>
                    <PopDownMark />
                  </PaxButton>
                </InputWrapper>
              </InputBig>
            </Form>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <SubmitButton>
              Найти билеты <img src={aero} alt="aero" />
            </SubmitButton>
          </div>
        </div>
      </Section>
    </div>
  </Header>
);
