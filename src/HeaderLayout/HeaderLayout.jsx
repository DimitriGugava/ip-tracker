import "./HeaderLayout.css";
import bluebackground from "../icons/bluebackground.svg";
import arrow from "../icons/arrow.svg";
import Map from "../HeaderLayout/map/map";

const HeaderLayout = () => {
  return (
    <div className="HeaderLayoutContainer">
      <img src={bluebackground} className="blueBackground" />
      <h1 className="headerTiTle">IP Address Tracker</h1>
      <div className="inputBox">
        <input className="inputOfAddress" />
        <button className="inputButton">
          <img src={arrow} className="arrow" />
        </button>
      </div>
      <div className="mapinfodisplaybox">
        <div className="mapinfotextbox">
          <a className="infotitle">IP Address</a>
          <div className="mapinfo">192.212.174.101</div>
        </div>
        <div className="mapinfotextbox">
          <a className="infotitle">IP Address</a>
          <div className="mapinfo">192.212.174.101</div>
        </div>
        <div className="mapinfotextbox">
          <a className="infotitle">IP Address</a>
          <div className="mapinfo">192.212.174.101</div>
        </div>
        <div className="mapinfotextbox">
          <a className="infotitle">IP Address</a>
          <div className="mapinfo">192.212.174.101</div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default HeaderLayout;
