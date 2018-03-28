import React from "react";
import styled from "styled-components";

import bgLine from "./background-line.png";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Subscribe = styled.div`
  background: #ffffff;
  color: #4a4a4a;
  background: url(${bgLine});
  background-repeat-y: no-repeat;
  background-repeat: repeat-x;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 32px 0 60px;

  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 35px 0 24px;
  }
`;

const Block = styled.div`
  flex-basis: 50%;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  margin: 0;
`;

const Socials = styled.div`
  text-align: center;
  padding: 20px 0 24px;
  flex-wrap: nowrap;
  flex: 0 0 auto;

  @media (min-width: 1200px) {
    text-align: left;
    padding-top: 10px;
  }
`;

const Button = styled.button`
  border: none;
  background: url(${props => props.img}) center no-repeat;
  background-size: contain;
  width: 36px;
  height: 36px;
  padding: 0;
  cursor: pointer;
  margin: 0 3px;
`;

const Subscription = styled.div`
  justify-content: center;
  margin-top: 0;
  display: flex;
  flex-wrap: nowrap;
  flex: 0 1 auto;

  @media (min-width: 1200px) {
    margin-top: 0;
    margin-left: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  border-radius: 2px;
  border: 1px #a0b0b9 solid;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;

  @media (min-width: 1200px) {
    text-align: left;
    margin-left: 13px;
    margin-top: 10px;
  }
`;

const Email = styled.input`
  color: inherit;
  padding: 7px 13px;
  margin: 0;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const Submit = styled.button`
  border: none;
  background: #ff8e41;
  padding: 7px 20px;
  color: #ffffff;
  cursor: pointer;
`;

export default () => {
  return (
    <Subscribe>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-10 col-xl-offset-1">
            <Wrapper>
              <Block>
                <Title>Хотите знать всё о скидках на авиабилеты?</Title>
                <Subtitle>
                  Вы можете подписаться на нашу рассылку<br />через соцсети или
                  по электронной почте.
                </Subtitle>
              </Block>
              <Socials>
                <Button img={twitter} />
                <Button img={facebook} />
                <Button img={vk} />
                <Button img={rss} />
              </Socials>
              <Subscription>
                <Form>
                  <Email type="email" placeholder="Ваш email" />
                  <Submit>Подписаться</Submit>
                </Form>
              </Subscription>
            </Wrapper>
          </div>
        </div>
      </div>
    </Subscribe>
  );
};
