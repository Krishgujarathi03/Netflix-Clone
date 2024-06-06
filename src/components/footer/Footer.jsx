import React from "react";
import "./footer.css";
import youtube_icon from "../../assests/youtube_icon.png";
import twitter_icon from "../../assests/twitter_icon.png";
import instagram_icon from "../../assests/instagram_icon.png";
import facebook_icon from "../../assests/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Use</li>
      </ul>
      <p className="copyright-text">@ 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
