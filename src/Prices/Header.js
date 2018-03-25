import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Image = styled.img`
  margin-right: 16px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const City = styled.div`
  font-size: 22px;
  line-height: 32px;
  font-weight: 500;
  flex-basis: 100%;
`;

const Country = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #a0b0b9;
`;

export default props => {
  return (
    <Header>
      <div>
        <Image src={props.destination.flag} alt="" />
      </div>
      <div className="row start-xs">
        <City>{props.destination.city}</City>
        <Country>{props.destination.country}</Country>
      </div>
    </Header>
  );
};
