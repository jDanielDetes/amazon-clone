import React from "react";
import "../css/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price,rating, image */}
      <div className="home__row">
        <Product id={1} title="Spindrift Sparkling Water, Grapefruit Flavored, Made with Real Squeezed Fruit, 12 Fl Oz Cans, Pack of 24 (Only 15 Calories per Seltzer Water Can)" price={17.97} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71-56wdP5xL._SL1500_.jpg" />
        <Product id={2} title="Ghost of Tsushima Launch Edition - PlayStation 4" price={59.88} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71bMo46AuNL._SL1361_.jpg" />
      </div>
      {/* product */}
      <div className="home__row">
      <Product id={12345} title="PlayStation 5 Digital Edition Console" price={899.98} rating={2} image="https://cdn.pocket-lint.com/r/s/970x/assets/images/143354-games-feature-sony-playstation-5-release-date-rumours-and-everything-you-need-to-know-about-ps5-image1-cvz3adase9-jpg.webp?v1" />
          <Product id={4} title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={69.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
        <Product id={5} title="Howling Rays Chicken Sando (IF JOLT DELIVERS IT TO YOU >:C)" price={110.33} rating={50} image="https://pbs.twimg.com/media/EYEX38zXsAAXvsi?format=jpg&name=large" />
     
    </div>
    <div className="home__row">
    <Product id={6} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1046.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
    </div>
    </div>

   
  );
}

export default Home;
