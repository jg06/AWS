import React, { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="time-wrapper">
      <div className="timetable">
        <div className="time">
          <span>{time.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}
