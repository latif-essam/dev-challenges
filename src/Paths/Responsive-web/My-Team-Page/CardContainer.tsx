import React, { PropsWithChildren } from "react";
import Card from "./Card";

interface CardContainerProps {
  data: any[];
}
const CardContainer = ({ data }: PropsWithChildren<CardContainerProps>) => {
  return (
    <div className="card_container">
      {data.map((member, index) => (
        <Card key={index} index={index} member={member} />
      ))}
    </div>
  );
};

export default CardContainer;
