const Card = ({ title, image, timeFrame, timeLapse }) => {
  const styleClass = ` Card ${title} `;
  return (
    <div className={styleClass}>
      <div className="Card_img">
        <img src={image} alt={title} />
      </div>
      <div className="Card_bottom">
        <div className="Card_bottom-up">
          <h2> {title} </h2>
          <div className="Buttons">
            <div className="Button"></div>
            <div className="Button"></div>
            <div className="Button"></div>
          </div>
        </div>
        <div className="Card_bottom-down">
          <h1>
            {" "}
            {timeFrame[timeLapse].current}
            {timeLapse === "daily" ? "min" : "hr"}
          </h1>
          <span>
            Last Week - {timeFrame[timeLapse].previous}
            {timeLapse === "daily" ? "min" : "hr"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
