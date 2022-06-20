import React from "react";
import { useState } from "react";
import tombstoneImage from "../images/danjon_reborn.jpg";
import tombstoneImage1 from "../images/danjon_reborn_1.png";
import tombstoneImage2 from "../images/danjon_reborn_2.png";

export default function Home() {
  let slideIndex = 0;

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides() {
    let slides = document.getElementsByClassName("Tombstone_Slides");
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }

  return (
    <div className="Home">
      <div className="Danjon_About">
        <p>
          Danjon Reborn is a derug project of the old Fenix/Griffin Danjon. Once
          a respected project with a great community. Some of their former
          members stepped in after a 2nd rug and since then their team has been
          building a solid foundation.
        </p>
      </div>
      <div className="Tombstone_Slideshow">
        <div className="Tombstone_Slides fade" style={{ display: "block" }}>
          <img src={tombstoneImage} style={{ width: "100%" }} alt="" />
        </div>

        <div className="Tombstone_Slides fade">
          <img src={tombstoneImage1} style={{ width: "100%" }} alt="" />
        </div>

        <div className="Tombstone_Slides fade">
          <img src={tombstoneImage2} style={{ width: "100%" }} alt="" />
        </div>
        <div className="Slideshow_Nav">
          <a className="prev" onClick={(e) => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={(e) => plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <div className="Tombstone_Description">
          <h3>Tombstone Collection</h3>
          <p>
            The first collection consists of 3333 unique Tombstones which
            signify the unfortunate rug of the Fenix and Griffin Danjon. This
            also marks the start of something new, something Reborn. These
            Tombstones will play a key role in the further resurrection and will
            be needed to be able to mint the next collections partly with our
            token and party with SOL.
          </p>
        </div>
      </div>
    </div>
  );
}
