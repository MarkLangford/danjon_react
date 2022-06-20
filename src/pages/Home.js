import React from "react";
import { useState, useEffect } from "react";
import tombstoneImage from "../images/danjon_reborn.jpg";
import tombstoneImage1 from "../images/danjon_reborn_1.png";
import tombstoneImage2 from "../images/danjon_reborn_2.png";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    let slides = document.getElementsByClassName("Tombstone_Slides");
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    }
    if (slideIndex < 0) {
      setSlideIndex(slides.length);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex === 4) {
      slides[2].style.display = "block";
    } else {
      slides[slideIndex - 1].style.display = "block";
    }
  }, [slideIndex]);

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
        <div className="Tombstone_Slides fade">
          <img src={tombstoneImage} style={{ width: "100%" }} alt="" />
        </div>

        <div className="Tombstone_Slides fade">
          <img src={tombstoneImage1} style={{ width: "100%" }} alt="" />
        </div>

        <div className="Tombstone_Slides fade">
          <img src={tombstoneImage2} style={{ width: "100%" }} alt="" />
        </div>
        <div className="Slideshow_Nav">
          <button
            className="prev"
            onClick={(e) => setSlideIndex(slideIndex + -1)}
          >
            &#10094;
          </button>
          <button
            className="next"
            onClick={(e) => setSlideIndex(slideIndex + 1)}
          >
            &#10095;
          </button>
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
