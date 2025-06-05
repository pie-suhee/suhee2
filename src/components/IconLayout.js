import LinkIcon from "./LinkIcon"
import Widget from "./Widget"
import '../css/components.css';

const IconLayout = () => {
  return (
    <div className="iconLayout">
      <LinkIcon link={"/"} img={"lp"} size={"big"} txt={"profile"} />

      <div className="smallZip">
        <LinkIcon link={"/"} img={"star"} size={"small"} txt={"skill"} />
        <LinkIcon link={"/"} img={"moon"} size={"small"} txt={"skill"} />
        <LinkIcon link={"/"} img={"clover"} size={"small"} txt={"skill"} />
        <LinkIcon link={"/"} img={"butterfly"} size={"small"} txt={"skill"} />
      </div>

      <div className="smallZip">
        <LinkIcon link={"/"} img={"tomato"} size={"small"} txt={"project"} />
        <LinkIcon link={"/"} img={"paperbag"} size={"small"} txt={"project"} />
        <LinkIcon link={"/"} img={"toast"} size={"small"} txt={"project"} />
        <LinkIcon link={"/"} img={"strawberry"} size={"small"} txt={"project"} />
      </div>

      <LinkIcon link={"/"} img={"duck"} size={"big"} txt={"history"} />

      <Widget />
    </div>
  );
};

export default IconLayout;