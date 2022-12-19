import "./HeaderLayout.css";
import axios from "axios";
import bluebackground from "../icons/bluebackground.svg";
import arrow from "../icons/arrow.svg";
import Map from "../HeaderLayout/map/map";
import { useEffect, useState } from "react";
import bluebackgrounddesktop from "../icons/bluebackgrounddesktop.svg";

const HeaderLayout = () => {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_L3TsBPl8KgmVrn2bdmoSTKVzeY7zl&ipAddress=8.8.8.8`
        );
        const data = await res.json();
        setAddress(data);
      };
      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []); // try - catch function. If Try is failed catch error, if try is successful show function.

  async function getEnteredAddress() {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_L3TsBPl8KgmVrn2bdmoSTKVzeY7zl&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
    );
    const data = await res.json();
    setAddress(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress(""); // after inputing a string or number input field emptys itself
    console.log("clicked");
  }
  console.log(address);
  return (
    <>
      {address && (
        <div className="HeaderLayoutContainer">
          <img src={bluebackground} className="blueBackground" />
          <img src={bluebackgrounddesktop} className="blueBackgrounddesktop" />

          <h1 className="headerTiTle">IP Address Tracker</h1>
          <div className="inputBox">
            <input
              type="text"
              className="inputOfAddress"
              placeholder="Search for any IP address or domain"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
          </div>
          <div className="inputBoxDekstop">
            <input
              type="text"
              className="inputOfAddressDesktop"
              placeholder="Search for any IP address or domain. e.g: 8.8.8.8 or Google.com"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button
              className="inputButton"
              onClick={handleSubmit}
              autoComplete="off"
            >
              <img src={arrow} className="arrow" />
            </button>
          </div>
          <div className="mapinfodisplaybox">
            <div className="mapinfotextbox">
              <a className="infotitle">IP ADDRESS</a>
              <div className="mapinfo">{address?.ip}</div>
            </div>
            <div className="desktopLine"></div>
            <div className="mapinfotextbox">
              <a className="infotitle">LOCATION</a>
              <div className="mapinfo">
                {address?.location.country}, {address?.location.region}
              </div>
            </div>
            <div className="desktopLine"></div>
            <div className="mapinfotextbox">
              <a className="infotitle">TIMEZONE</a>
              <div className="mapinfo">{address?.location.timezone}</div>
            </div>
            <div className="desktopLine"></div>
            <div className="mapinfotextbox">
              <a className="infotitle">ISP</a>
              <div className="mapinfo">{address?.isp}</div>
            </div>
          </div>
          <Map address={address} />
        </div>
      )}
    </>
  );
};

export default HeaderLayout;
