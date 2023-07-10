import React, { PropsWithChildren } from "react";
import "./index.scss";
interface MyTeamPageProps {}
import data from "../../../data.json";
import imga from "./../../../assets/photo1.png";
const MyTeamPage = ({}: PropsWithChildren<MyTeamPageProps>) => {
  console.log(data[0].path);

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
        <div className="card">
          {data.map(({ fname, path }) => (
            <div
              key={fname}
              style={{
                backgroundImage: `url(./../../../assets/images/${path})`,
                height: 600,
              }}
            >
              <h3>{fname}</h3>
              {/* <img src={`./../../../assets/images/${path}`} alt={fname} /> */}
            </div>
          ))}
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default MyTeamPage;
