import { useEffect, useState } from "react";

interface Props {
  sunset: Date;
  sunrise: Date;
}

function TodayTimeInfo({ sunset, sunrise }: Props) {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    setInterval(() => {
      const dateObj = new Date();
      setTime(
        dateObj.getHours().toString() + ":" + dateObj.getMinutes().toString()
      );
      setDay(dateObj.toLocaleString("en-us", { weekday: "long" }));
      setDate(
        dateObj.getDate() +
          "." +
          dateObj.getMonth() +
          "." +
          dateObj.getFullYear()
      );
    }, 1000);
  });

  return (
    <div className="time-info">
      <div className="time-info-now">
        <p>
          <span className="fw-semi-bold color-natural-100">{day}</span> {time}
        </p>
        <p className="fw-semi-bold color-natural-100">{date}</p>
      </div>
      <div className="vertical-line"></div>
      <div className="time-info-set-rise">
        <p>
          <span className="fw-semi-bold color-natural-100">Sunrise</span>{" "}
          {sunrise.getHours()}:{sunrise.getMinutes()}
        </p>
        <p>
          <span className="fw-semi-bold color-natural-100">Sunset</span>{" "}
          {sunset.getHours()}:{sunset.getMinutes()}
        </p>
      </div>
    </div>
  );
}

export default TodayTimeInfo;
