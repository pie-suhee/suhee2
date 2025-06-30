import { useEffect, useState } from 'react';

import '../assets/css/components.css';

const Widget = () => {
  /* 날짜 S: */
  const today = new Date();
  
  const weekday = today.toLocaleString('en-US', { weekday: 'long' });
  const month = today.toLocaleString('en-US', { month: 'long' });
  const day = today.getDate();
  /* 날짜 E: */

  /* 시계 S: */
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 매 1분마다 시간 업데이트
    const updateClock = () => setTime(new Date());

    updateClock(); // 초기 호출
    const interval = setInterval(updateClock, 1 * 1000); // 1초마다

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  /* 시계 E: */

  return (
    <div className="widget">
      <div className="todayDate">
        <div className="weekday">{weekday}</div>
        <div className="day">
          {day} {month}
        </div>
      </div>

      <div className="clock">{formatTime(time)}</div>
    </div>
  );
};

export default Widget;