import { Link } from 'react-router-dom';
import '../assets/css/components.css';

const LinkIcon = ({ img, link, size, txt }) => {
  let imgSrc;

  try {
    imgSrc = require(`../assets/img/icon/${img}.png`);
  } catch (e) {
    imgSrc = require(`../assets/img/icon/default.png`); // 기본 아이콘
  }

  return (
    <div className="iconBox">
      <Link to={link} className={`icon ${size} ${img}`} style={{backgroundImage: `url(${imgSrc})`}}></Link>
      <span>{txt}</span>
    </div>
  );
};

export default LinkIcon;