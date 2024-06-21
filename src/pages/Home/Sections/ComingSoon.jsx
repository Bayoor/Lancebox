/* eslint-disable react/no-unescaped-entities */
import playStore from "../../../assets/images/google-store.png";
import appleStore from "../../../assets/images/apple-store.png";

import "./styles/comingsoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon c-container">
      <h2>Coming soon to Your Mobile</h2>
      <p>
        Experience a new level of convenience and flexibility with our service's
        mobile app, designed to simplify your life
      </p>
      <div className="app-stores">
        <div>
          <img src={appleStore} alt="" />
        </div>

        <div>
          <img src={playStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
