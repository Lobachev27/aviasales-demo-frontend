import React from "react";
import styled from "styled-components";

import Block from "./Block";

const SpecialOffer = styled.div`
  margin-bottom: 12px;
  background: #ffffff;
`;

export default props => {
  return (
    <SpecialOffer>
      <Block offer={props.offer} />
    </SpecialOffer>
  );
};
