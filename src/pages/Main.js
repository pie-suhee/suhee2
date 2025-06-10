import LinkIcon from "../components/LinkIcon"
import Widget from "../components/Widget"

import '../css/components.css';

function Main() {
  return (
    <main className="main">
      <div className="iconLayout">
        <LinkIcon link={"/timeline"} img={"lp"} size={"big"} txt={"timeline"} />

        <div className="smallZip">
          <LinkIcon link={"/skill"} img={"star"} size={"small"} txt={"skill"} />
          <LinkIcon link={"/skill"} img={"moon"} size={"small"} txt={"skill"} />
          <LinkIcon link={"/skill"} img={"clover"} size={"small"} txt={"skill"} />
          <LinkIcon link={"/skill"} img={"butterfly"} size={"small"} txt={"skill"} />
        </div>

        <div className="smallZip">
          <LinkIcon link={"/project"} img={"tomato"} size={"small"} txt={"project"} />
          <LinkIcon link={"/project"} img={"paperbag"} size={"small"} txt={"project"} />
          <LinkIcon link={"/project"} img={"toast"} size={"small"} txt={"project"} />
          <LinkIcon link={"/project"} img={"strawberry"} size={"small"} txt={"project"} />
        </div>

        <LinkIcon link={"/profile"} img={"duck"} size={"big"} txt={"profile"} />

        <Widget />
      </div>
    </main>
  );
}

export default Main;
