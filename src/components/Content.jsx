import React from "react";
import image from "../mainGallery/image6.webp";
import "../styles/Content.css";

const NationalParksPage = () => {
  return (
    <div className="content-container">
      <main className="content-main">
        <div className="content-flex">
          <div className="content-image">
            <img src={image} alt="Deer" className="image" />
          </div>
          <div className="content-text">
            <h2 className="content-title">
              WELCOME TO NAVEGAON BANDH NATIONAL PARK
            </h2>
            <h1 className="content-description">
              Join Us in Preserving Nature’s Wonders
            </h1>
            <div className="title">
              <p>
                The National Parks of India is committed to protecting wildlife
                and natural habitats. We aim to conserve national parks and
                preserve the beauty of nature for future generations.
              </p>
              <p>
                Our mission is to inspire communities to take action for nature.
                Every effort we make together contributes to a better, more
                sustainable world.
              </p>
            </div>
            <ul className="list">
              <li>Protect over 50 national parks across the country</li>
              <li>Support conservation projects with a global reach</li>
              <li>
                Engage in education programs that promote wildlife protection
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NationalParksPage;
