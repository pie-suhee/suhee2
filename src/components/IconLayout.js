import Icon from "./Icon"
import Widget from "./Widget"
import '../css/components.css';

const IconLayout = () => {
  return (
    <div className="iconLayout">
      <Icon link={"/"} img={"lp"} size={"big"} txt={"profile"} />

      <div className="smallZip">
        <Icon link={"/"} img={"star"} size={"small"} txt={"skill"} />
        <Icon link={"/"} img={"moon"} size={"small"} txt={"skill"} />
        <Icon link={"/"} img={"clover"} size={"small"} txt={"skill"} />
        <Icon link={"/"} img={"butterfly"} size={"small"} txt={"skill"} />
      </div>

      <div className="smallZip">
        <Icon link={"/"} img={"tomato"} size={"small"} txt={"project"} />
        <Icon link={"/"} img={"paperbag"} size={"small"} txt={"project"} />
        <Icon link={"/"} img={"toast"} size={"small"} txt={"project"} />
        <Icon link={"/"} img={"strawberry"} size={"small"} txt={"project"} />
      </div>

      <Icon link={"/"} img={"duck"} size={"big"} txt={"history"} />

      <Widget />
    </div>
  );
};

export default IconLayout;