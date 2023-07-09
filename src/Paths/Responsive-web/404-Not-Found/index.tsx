import React, { PropsWithChildren } from "react";
import "./index.scss";
import nfLogo from "../../../assets/Scarecrow.png";

interface NotFoundProps {}
const NotFound = ({}: PropsWithChildren<NotFoundProps>) => {
  return (
    <div className="nf-container">
      <div className="nf-header">
        <h1>404 Not Found</h1>
      </div>
      <main className="nf-main">
        <img src={nfLogo} alt="not found logo" className="nf-logo" />
        <div className="nf-content">
          <h2>I have bad news for you</h2>
          <p className="nf-content_message">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button>back to homepage</button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
