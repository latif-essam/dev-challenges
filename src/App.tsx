import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MyTeamPage from "./Paths/Responsive-web/My-Team-Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <MyTeamPage />
    </div>
  );
}

export default App;
