import React from "react";
import styled from "styled-components";

import rating from "./rating.svg";
import android from "./android.svg";
import windows from "./windows.svg";
import apple from "./apple.svg";
import phone from "./phone.png";

const MobileApp = styled.div`
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
  padding: 0;
  margin: 0;
  min-width: 320px;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin: 24px 0 19px;
  
  @media (min-width: 768px) {
    text-align: left;
	font-size: 32px;
    line-height: 40px;
	margin: 46px 50px 16px 0;
  };
  
  @media (min-width: 1200px) {
   	margin: 66px 0 19px;
  };
`;

const Rating = styled.div`
  margin-bottom: 36px;
  
  @media (min-width: 768px) {
    text-align: left;
	margin-bottom: 40px;
  };
`;

const Picture = styled.div`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 162px;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    width: 234px;
  }
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
  padding-left: 0;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 55px;
  };
  
  @media (min-width: 992px) {
	padding-bottom: 68px;
  };
`;

const AppLink = styled.a`
  display: flex;
  color: inherit;
  align-content: center;
  text-decoration: none;
  padding: 20px 0 0 6px;
  font-size: 14px;
  line-height: 25px;
  font-weight: 300;
  
  @media (min-width: 768px) {
    margin-right: 40px;
	padding: 0;
  } &:hover {
    text-decoration: underline;
  };
`;

const Text = styled.p`
  color: inherit;
  align-content: center;
  margin: 0 8px;
`;

const SplitLine = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
	position: relative;
    left: -24px;
    border: none;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    min-height: 100%;
    width: 1px;
  };
`;

export default () => {
  return (
    <MobileApp>
      <div className="container">
        <div className="row center-xs left-md">
          <div className="col-xs-12 col-md-8 col-md-offset-4">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <img src={rating} alt="rating 4.6 stars" /> Более 103&nbsp;000
              оценок
            </Rating>
          </div>
        </div>
        <div className="row bottom-xs">
          <div className="col-xs-6 col-md-4 col-xl-3 col-xl-offset-1">
            <Picture>
		    	    <Img src={phone} alt="" />
		        </Picture>
          </div>
    		  <div className="col-xs-6 col-md-8 col-xl">
            <AppList>
              <AppLink href="#">
                <img src={apple} alt="" />
		        		<Text>iPhone или iPad</Text>
              </AppLink>
			        <SplitLine />
              <AppLink href="#">
                <img src={android} alt="" /> 
			        	<Text>Android</Text>
              </AppLink>
			        <SplitLine />
              <AppLink href="#">
                <img src={windows} alt="" /> 
		        		<Text>Windows Phone</Text>
              </AppLink>
            </AppList>
          </div>
        </div>
      </div>
    </MobileApp>
  );
};