import { useEffect, useState } from "react";
import Card from "./components/Card";

import JsonData from "./utils/data.json";

import Work from "./images/icon-work.svg";
import Play from "./images/icon-play.svg";
import Study from "./images/icon-study.svg";
import Exercise from "./images/icon-exercise.svg";
import Social from "./images/icon-social.svg";
import SelfCare from "./images/icon-self-care.svg";

import UserCard from "./components/UserCard";

function App() {
  const images = [Work, Play, Study, Exercise, Social, SelfCare];
  const [state, setState] = useState([]);
  const [timeLapse, setTimeLapse] = useState("daily");

  useEffect(() => {
    setState(JsonData);
  }, []);

  const handleClick = (e) => {
    let frame = e.target.innerText.toLowerCase();
    switch (frame) {
      case "daily":
        setTimeLapse("daily");
        break;
      case "weekly":
        setTimeLapse("weekly");
        break;
      case "monthly":
        setTimeLapse("monthly");
        break;
      default:
        console.log("default");
        break;
    }
  };
  return (
    <div className="App">
      <UserCard handleClick={handleClick} timeLapse={timeLapse} />
      {state.map((item, i) => {
        return (
          <Card
            key={i}
            title={item.title}
            image={images[i]}
            timeFrame={item.timeframes}
            timeLapse={timeLapse}
          />
        );
      })}
      {/* <p> {state} </p> */}
    </div>
  );
}

export default App;
