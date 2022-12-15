import "./HeaderLayout.css";
import axios from "axios";
import bluebackground from "../icons/bluebackground.svg";
import arrow from "../icons/arrow.svg";
import Map from "../HeaderLayout/map/map";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const HeaderLayout = () => {
  const [address, setAddress] = useState("");
  const [inputIp, setInputIp] = useState(null);

  const getInfo = (e) => {
    setAddress(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_aMtk35qDqi4sbvhno2Jg4YV1LX1te&ipAddress=8.8.8.8`
      )
      .then((res) => {
        setInputIp(res.data);
      });
  };
  console.log(address);
  console.log(inputIp);

  return (
    <div className="HeaderLayoutContainer">
      <img src={bluebackground} className="blueBackground" />
      <h1 className="headerTiTle">IP Address Tracker</h1>
      <div className="inputBox">
        <input type="text" className="inputOfAddress" onChange={getInfo} />
        <button className="inputButton" onClick={fetchData}>
          <img src={arrow} className="arrow" />
        </button>
      </div>
      <div className="mapinfodisplaybox">
        <div className="mapinfotextbox">
          <a className="infotitle">IP ADDRESS</a>
          <div className="mapinfo">{inputIp?.ip}</div>
        </div>
        <div className="mapinfotextbox">
          <a className="infotitle">LOCATION</a>
          <div className="mapinfo">
            {inputIp?.location.country}, {inputIp?.location.region}
          </div>
        </div>
        <div className="mapinfotextbox">
          <a className="infotitle">TIMEZONE</a>
          <div className="mapinfo">{inputIp?.location.timezone}</div>
        </div>
        <div className="mapinfotextbox">
          <a className="infotitle">ISP</a>
          <div className="mapinfo">{inputIp?.isp}</div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default HeaderLayout;
