import { useState } from "react";
import Card from "./components/Card";

import initialState from "./utils/data.json";

import "./styles/App.scss";

import Work from "./images/icon-work.svg";
import Play from "./images/icon-play.svg";
import Study from "./images/icon-study.svg";
import Exercise from "./images/icon-exercise.svg";
import Social from "./images/icon-social.svg";
import SelfCare from "./images/icon-self-care.svg";
import UserCard from "./components/UserCard";

function App() {
  const images = [Work, Play, Study, Exercise, Social, SelfCare];
  const [data, setData] = useState([initialState, images]);

  console.log(data[0][1].timeframes.daily);

  return (
    <div className="App">
      <UserCard />
      {data[0].map((item, i) => (
        <Card
          image={data[1][i]}
          title={item.title}
          daily={item.timeframes.daily}
          monthly={item.timeframes.monthly}
          weekly={item.timeframes.weekly}
        />
      ))}
    </div>
  );
}

export default App;
