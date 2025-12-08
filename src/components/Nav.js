import { useState } from 'react';

import LinkIcon from "./LinkIcon"
import AlarmIcon from "./AlarmIcon"

const Footer = () => {
  const [isAnyAlarmVisible, setIsAnyAlarmVisible] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <LinkIcon link={"/"} img={"jelly"} size={"small"} txt={"home"} />
        </li>
        <li>
          <AlarmIcon type={"address"} img={"room"} size={"small"} txt={"address"} isAnyAlarmVisible={isAnyAlarmVisible} setIsAnyAlarmVisible={setIsAnyAlarmVisible} />
        </li>
        <li>
          <AlarmIcon type={"e-mail"} img={"globe"} size={"small"} txt={"e-mail"} isAnyAlarmVisible={isAnyAlarmVisible} setIsAnyAlarmVisible={setIsAnyAlarmVisible} />
        </li>
        <li>
          <AlarmIcon type={"phone"} img={"phone"} size={"small"} txt={"phone"} isAnyAlarmVisible={isAnyAlarmVisible} setIsAnyAlarmVisible={setIsAnyAlarmVisible} />
        </li>
      </ul>
    </nav>
  );
};

export default Footer;