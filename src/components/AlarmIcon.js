import { useState } from 'react';
import alarmData from '../assets/json/alarmText.json';
import '../assets/css/components.css';

const AlarmIcon = ({ img, type, size, txt, isAnyAlarmVisible, setIsAnyAlarmVisible }) => {
  let imgSrc;
  const { alarmTitle, alarmContent, copy } = alarmData[type];

  try {
    imgSrc = require(`../assets/img/icon/${img}.png`);
  } catch (e) {
    imgSrc = require(`../assets/img/icon/default.png`); // 기본 아이콘
  }

  /* 알람 팝업, 복사 기능 S: */
  const [alarmState, setAlarmState] = useState('');
  
  const handleClick = () => {
    if (isAnyAlarmVisible) return;

    if (copy) {
      navigator.clipboard.writeText(copy).catch((err) => {
        console.error('클립보드 복사 실패:', err);
      });
    }

    setAlarmState('show');
    setIsAnyAlarmVisible(true);

    setTimeout(() => {
      setAlarmState('hide');

      setTimeout(() => {
        setAlarmState('finish');
        setIsAnyAlarmVisible(false);
      }, 400);
    }, 3000);
  };
  /* 알람 팝업, 복사 기능 E: */

  return (
    <>
      <div className="iconBox" onClick={handleClick}>
        <img src={imgSrc} className={`icon ${size} ${img}`} alt={`${img} 아이콘`} />
        <span>{txt}</span>
      </div>

      <div className={`alarmBox ${alarmState}`}>
        <img src={imgSrc} className={`icon ${size} ${img}`} alt={`${img} 아이콘`} />

        <div className="alarmText">
          <div className="alarmTitle">{alarmTitle}</div>

          <div className="alarmContent">{alarmContent}</div>
        </div>
      </div>
    </>
  );
};

export default AlarmIcon;