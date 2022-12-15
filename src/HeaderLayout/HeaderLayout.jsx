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
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const getInfo = (e) => {
    setAddress(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_aMtk35qDqi4sbvhno2Jg4YV1LX1te&${
          checkIpAddress.test(address)
            ? `address=${address}`
            : checkDomain.test(address)
            ? `domain=${address}`
            : " "
        }`
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
      <Map address={address} />
    </div>
  );
};

export default HeaderLayout;
