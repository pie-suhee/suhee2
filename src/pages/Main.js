import LinkIcon from "../components/LinkIcon"
import Widget from "../components/Widget"

import '../css/components.css';

function Main() {
  return (
    <main className="main">
      <div className="iconLayout">
        <LinkIcon link={"/history"} img={"lp"} size={"big"} txt={"history"} />

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

        <LinkIcon link={"/profile"} img={"duck"} size={"big"} txt={"profile"} />

        <Widget />
      </div>
    </main>
  );
}

export default Main;
