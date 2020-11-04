import Theme from "./Theme";
import Localization from "./Localization";
import localization from "../../localization";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Localization />
      <div className="user">
        <div className="name">Ilezus Dev</div>
        <div className="status">
          <span className="circle" />
          {localization.online}
        </div>
      </div>
      <Theme />
    </div>
  );
};

export default Header;
