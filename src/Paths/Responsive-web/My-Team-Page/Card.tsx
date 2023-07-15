import { PropsWithChildren } from "react";
import "./index.scss";
interface CardProps {
  member: {
    path: string;
    fname: string;
    lname: string;
    title: string;
    mid_desk: boolean;
    mid_mobile: boolean;
  };
  index: number;
}
const Card = ({ member, index }: PropsWithChildren<CardProps>) => {
  const { path, fname, lname, title, mid_desk, mid_mobile } = member;
  return (
    <div
      className={`card ${mid_desk ? "mid_desk" : ""} ${
        mid_mobile ? "mid_mobile" : ""
      }`}
    >
      <h4 className={"title"}>{title}</h4>
      <img src={path} alt={fname} />
      <h3 className="name">{fname + " " + lname}</h3>
    </div>
  );
};

export default Card;
