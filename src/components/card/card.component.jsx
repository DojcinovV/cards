import React from "react";
import {
  CardContainer,
  CardLogoRow,
  CardNumberRow,
  CardInfoRow,
  CardInfoName,
} from "./card.styles";

export const Card = ({ card }) => {
  return (
    <CardContainer>
      <CardLogoRow>Logo here</CardLogoRow>
      <CardNumberRow>{card?.number}</CardNumberRow>
      <CardInfoRow>
        <CardInfoName>
          <div>Cardsholder Name</div>
          <div>{card?.holderName}</div>
        </CardInfoName>
        <div>
          <div>Valid up to</div>
          <div>{card?.validTo}</div>
        </div>
      </CardInfoRow>
    </CardContainer>
  );
};
