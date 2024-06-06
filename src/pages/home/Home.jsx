import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import hero_banner from "../../assests/hero_banner.jpg";
import hero_title from "../../assests/hero_title.png";
import play_icon from "../../assests/play_icon.png";
import info_icon from "../../assests/info_icon.png";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* Hero section */}
      <div className="hero">
        <img src={hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Dicovering his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <Cards />
        </div>
      </div>
      {/* Cards */}
      <div className="more-cards">
        <Cards title={"Blockbluster Movies"} category={"top_rated"} />
        <Cards title={"Only on Netflix"} category={"popular"} />
        <Cards title={"Upcoming"} category={"upcoming"} />
        <Cards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
