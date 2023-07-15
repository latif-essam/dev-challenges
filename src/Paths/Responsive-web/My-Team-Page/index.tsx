import React, { PropsWithChildren } from "react";
import "./index.scss";
interface MyTeamPageProps {}
import data from "../../../data.json";
import CardContainer from "./CardContainer";

const MyTeamPage = ({}: PropsWithChildren<MyTeamPageProps>) => {
  return (
    <div className="mtp-app">
      <header>
        <h1>The creative crew</h1>
        <div className="header_info">
          <h2>who we are?</h2>
          <p>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </header>
      <main>
        <CardContainer data={data} />
      </main>
      <footer>
        <p>
          created by <span>latif-essam</span> - devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default MyTeamPage;
