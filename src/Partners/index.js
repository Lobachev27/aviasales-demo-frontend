import React from "react";
import styled from "styled-components";

import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import oneTwoTrip from "./one-two-trip.png";
import korean from "./korean.png";
import elivaline from "./elivaline.png";
import arrow from "./arrow.svg";
import dot_e from "./dot-e.svg";
import dot_f from "./dot-f.svg";

const Partners = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding-top: 22px;
    padding-bottom: 16px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
  padding: 0;
  margin:0;
`;

const Slider = styled.div`
  margin-top: 6px;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
`;

const Back = styled.button`
  border: none;
  background: url(${arrow}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

const Forward = Back.extend`
  transform: scale(-1, 1);
`;

const Page = styled.div`
  flex-grow: 1;
`;

const Slides = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Slide = styled.img`
  margin: 16px;
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.button`
  border: none;
  background: url(${props => (props.current ? dot_f : dot_e)}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

export default () => {
  return (
    <Partners>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-10 col-xl-offset-1">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
            <Slider>
              <Pages>
                <Back />
                <Page>
                  <Slides>
                    <Slide src={aeroflot} />
                    <Slide src={s7} />
                    <Slide src={oneTwoTrip} />
                    <Slide src={korean} />
                    <Slide src={elivaline} />
                  </Slides>
                </Page>
                <Forward />
              </Pages>
              <Indicator>
                <Dot current />
                <Dot />
                <Dot />
              </Indicator>
            </Slider>
          </div>
        </div>
      </div>
    </Partners>
  );
};
