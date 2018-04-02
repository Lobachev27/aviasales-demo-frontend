import React from "react";
import styled from "styled-components";

import vk from "./vk.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import applestore from "./applestore.svg";
import googleplay from "./googleplay.svg";
import windowsPhone from "./windows-phone.svg";

const Footer = styled.div`
  background: #ffffff;
  color: #4a4a4a;
  min-width: 320px;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  padding: 0 0 12px;
  
  @media (min-width: 1200px) {
    padding: 0 0 18px;
  };
`;

const Title = styled.h2`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  margin: 32px 0 16px;
  padding: 0;
  
  @media (min-width: 768px) {
    margin: 40px 0 20px;
  };
  
  @media (min-width: 1200px) {
    margin: 45px 0 20px;
  };
`;

const LinkNav = styled.a`
  display: block;
  text-decoration: none;
  color: #5b5b5c;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0 0 12px;
  transition: color 0.3s;
  hover: #fd8a27;
  };
`;

const LinkBold = LinkNav.extend`
  padding: 3px 0 0;
  font-weight: 700;
`;

const SplitLine = styled.div`
  display: block;
  Border-bottom: 1px solid #e0e6e8;
  min-width: 100%;
  height: 0px;
  color: #e0e6e8;
  };
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 24px 0 0;
  
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
	padding: 40px 0 0;
	box-sizing: border-box;
  };
`;

const TopLeftSection = styled.div`
  margin: 0 0 16px;
  padding: 0;
  
  @media (min-width: 1200px) {
    margin: 0 0 40px;
  };
`;

const LinksList = styled.div`
  margin: 0 0 8px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Link = LinkNav.extend`
  margin: 0 12px 8px 0;
  padding: 0;
  
  @media (min-width: 768px) {
    margin: 0 16px 10px 0;
  };
`;

const SocialLink = LinkNav.extend`
  margin: 0 0 12px;
  padding: 0;
  display: flex;
  align-content: center;
  flex-basis: 33.3%;
  };
  
  @media (min-width: 768px) {
    margin: 0 20px 24px 0;
	flex-basis: 10%;
  };
`;

const Text = styled.p`
  color: inherit;
  align-content: center;
  margin: 0 6px;
`;

const Booking = styled.div`
  text-align: center;
  margin: 4px 0 0;
  
  @media (min-width: 768px) {
    text-align: left;
  };
`;

const BottomRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  };
  
  @media (min-width: 1200px) {
    align-items: flex-end;
  };
`;

const AppsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 16px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
	margin: 0 0 24px;
  };
  
  @media (min-width: 1200px) {
    justify-content: flex-end;
	margin: 0 0 34px;
  };
`;

const AppLink = styled.a`
  display: block;
  align: flex;
  margin: 0 0 4px 0;
  
  @media (min-width: 768px) {
    margin: 0 10px 0 0;
  };
  
  @media (min-width: 1200px) {
    margin: 0 0 0 10px;
  };
`;

const Copyright = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  margin: 0 0 24px;
  
  @media (min-width: 768px) {
    margin: 0 0 40px;
  };
`;

export default () => {
  return (
    <Footer>
		  <Container>
        <div className="container">
			    <div className="row">
			      <div className="col-xs-6 col-md-3 col-xl-2">
				      <Title>СТРАНЫ</Title>
				      <nav>
                <LinkNav href="#">Россия</LinkNav>
                <LinkNav href="#">Таиланд</LinkNav>
                <LinkNav href="#">Черногория</LinkNav>
                <LinkNav href="#">Кипр</LinkNav>
                <LinkNav href="#">Болгария</LinkNav>
                <LinkNav href="#">Грузия</LinkNav>
                <LinkBold href="#">Все страны <strong>&rarr;</strong></LinkBold>
			      	</nav>
			      </div>
			      <div className="col-xs-6 col-md-3 col-xl-2">
				        <Title>ГОРОДА</Title>
				        <nav>
                  <LinkNav href="#">Москва</LinkNav>
                  <LinkNav href="#">Санкт-Петербург</LinkNav>
                  <LinkNav href="#">Симферополь</LinkNav>
                  <LinkNav href="#">Адлер</LinkNav>
                  <LinkNav href="#">Екатеринбург</LinkNav>
                  <LinkNav href="#">Лондон</LinkNav>
                  <LinkBold href="#">Все города <strong>&rarr;</strong></LinkBold>
		        		</nav>
			        </div>
			        <div className="col-xs-6 col-md-3 col-xl-2">
		        		<Title>АВИАКОМПАНИИ</Title>
	        			<nav>
                  <LinkNav href="#">Air Berlin</LinkNav>
                  <LinkNav href="#">Air France</LinkNav>
                  <LinkNav href="#">Alitalia</LinkNav>
                  <LinkNav href="#">Air Baltic</LinkNav>
                  <LinkNav href="#">Emirates</LinkNav>
                  <LinkNav href="#">KLM</LinkNav>
                  <LinkBold href="#">Все авиакомпании <strong>&rarr;</strong></LinkBold>
			        	</nav>
		      	  </div>
			        <div className="col-xs-6 col-md-3 col-xl-2">
			        	<Title>АЭРОПОРТЫ</Title>
		        		<nav>
                  <LinkNav href="#">Шереметьево</LinkNav>
                  <LinkNav href="#">Курумоч</LinkNav>
                  <LinkNav href="#">Домодедово</LinkNav>
                  <LinkNav href="#">Толмачево</LinkNav>
                  <LinkNav href="#">Владивосток</LinkNav>
                  <LinkNav href="#">Гамбург</LinkNav>
                  <LinkBold href="#">Все аэропорты <strong>&rarr;</strong></LinkBold>
		        		</nav>
			        </div>
		      	  <div className="col-xs-6 col-md-3 col-xl-2">
			        	<Title>НАПРАВЛЕНИЯ</Title>
			      	<nav>
                <LinkNav href="#">MOW – SIP</LinkNav>
                <LinkNav href="#">MOW – AER</LinkNav>
                <LinkNav href="#">MOW – TIV</LinkNav>
                <LinkNav href="#">MOW – MRV</LinkNav>
                <LinkNav href="#">LED – MOW</LinkNav>
                <LinkNav href="#">MOW – BKK</LinkNav>
	      			</nav>
		    	  </div>
		    	  <div className="col-xs-6 col-md-3 col-xl-2">
		      		<Title>СЕРВИСЫ</Title>
		      		<nav>
                <LinkNav href="#">Горящие авиабилеты</LinkNav>
                <LinkNav href="#">Календарь низких цен</LinkNav>
                <LinkNav href="#">Карта низких цен</LinkNav>
                <LinkNav href="#">Спецпредложения</LinkNav>
                <LinkNav href="#">Таблица цен</LinkNav>
                <LinkNav href="#">Блог</LinkNav>
                <LinkNav href="#">Помощь</LinkNav>
			      	</nav>
		    	  </div>
		    	</div>
		    </div>
		  </Container>
		  <SplitLine />
	  	<OuterWrapper>
	    	<div className="container">
	      	<div className="row">
	        	<div className="col-xs-12 col-xl-7 col-xl-offset-0">
              <TopLeftSection>
                <LinksList>
                  <Link href="#">О компании</Link>
                  <Link href="#">Партнёрская программа</Link>
                  <Link href="#">Реклама</Link>
                  <Link href="#">Вакансии</Link>
                  <Link href="#">Помощь</Link>
                  <Link href="#">Правила</Link>
                  <Link href="#">White Label авиабилеты</Link>
                </LinksList>
                <LinksList>
                  <SocialLink href="#">
                    <img src={vk} alt="" /> 
			            	<Text>Вконтакте</Text>
                  </SocialLink>
                  <SocialLink href="#">
                    <img src={facebook} alt="" /> 
			            	<Text>Фейсбук</Text>
                  </SocialLink>
                  <SocialLink href="#">
                    <img src={instagram} alt="" /> 
				            <Text>Инстаграм</Text>
                  </SocialLink>
                  <SocialLink href="#">
                    <img src={twitter} alt="" /> 
			            	<Text>Твиттер</Text>
                  </SocialLink>
                  <SocialLink href="#">
                    <img src={viber} alt="" /> 
		            		<Text>Вайбер</Text>
                  </SocialLink>
                </LinksList>
                <Booking>
                  <Link href="#">Поиск и бронирование отелей</Link>
                </Booking>
              </TopLeftSection>
		        </div>
		        <div className="col-xs-12 col-xl-4 col-xl-offset-1">
              <BottomRightSection>
                <AppsList>
                  <AppLink href="#">
                    <img src={applestore} alt="App Store" />
                  </AppLink>
                  <AppLink href="#">
                    <img src={googleplay} alt="Google Play" />
                  </AppLink>
                  <AppLink href="#">
                    <img src={windowsPhone} alt="Windows Phone" />
                  </AppLink>
                </AppsList>
                <Copyright>
                  &copy; 2007–2018, Aviasales — дешевые авиабилеты
                </Copyright>
              </BottomRightSection>
		        </div>
	      	</div>
        </div>
      </OuterWrapper>
    </Footer>
  );
};