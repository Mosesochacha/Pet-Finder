import React, { useEffect, useState } from "react";
import Image from "./images/pexe3.jpg";
import Image1 from "./images/pexels (1).jpg";
import Image2 from "./images/pexels-2.jpg";
import Image5 from "./images/pexels-3.jpg";
import Image3 from "./images/pexels-4.jpg";
import Image4 from "./images/pexels (1).jpg";

const images = [Image1, Image2, Image3, Image, Image4, Image5];

const paragraphs = [
  <p style={{ color: "black" }}>
    Welcome to PetFinder - the ultimate app for pet lovers! Are you ready to
    embark on a journey to find your perfect furry companion? Our app makes it
    easy to search for pets by breed, age, and location. Whether you're looking
    for a loyal dog, a cuddly cat, or a playful rabbit, we have the perfect pet
    for you.
  </p>,
  <p>
    But PetFinder is not just about finding pets for adoption, it's also about
    creating a community of pet lovers. Connect with other pet owners, share
    tips and advice, and stay up-to-date with the latest news and events in the
    pet world.
  </p>,
  <p>
    With PetFinder, you can easily browse through thousands of pets available
    for adoption, and connect with shelters and rescue organizations in your
    area. Our app also allows you to create a profile for your own pet and share
    their story with the world.
  </p>,
  <p>
    Are you looking for a furry companion to brighten up your days? Look no
    further than our Petfinder app! With just a few clicks, you can browse
    thousands of pets available for adoption from shelters and rescue
    organizations near you.
  </p>,
  <p>
    Whether you're looking for a playful pup, a cuddly cat, or a charming
    chinchilla, our app has the perfect match for you. So why wait? Log in now
    and start your search for your new best friend!
  </p>,
];

export default function Homepage() {
  const [currentBackground, setCurrentBackground] = useState("");

  useEffect(() => {
    const intervalId = setInterval(changeBackground, 6000); // change background every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function changeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImage = images[randomIndex];
    setCurrentBackground(newImage);
  }

  return (
    <div className="Homepages">
      <div className="hero-image me-2">
        <div className="hero-text">
          <h1>Find Your Furry Friend Today</h1>
          <h2>Adopt a Pet Today!</h2>

          <div id="display" className="d-flex ">
            <img
            className="m-4"
              src={currentBackground}
              alt="..."
              width="800em"
              height="320em"
              style={{ transition: "1s ease-in-out" }}
            />
           <span className="par" >{paragraphs[Math.floor(Math.random() * paragraphs.length)]}</span>
          </div>

          <p style={{color: "black"}}>
            Search for your perfect pet by breed, age, and location as well as
            add yours
          </p>
        </div>
      </div>

      <div className="content">
        <center>
          {" "}
          <h3>About Us</h3>
          <p>
            Pet Finder is dedicated to helping pets find their forever homes.
            Our mission is to connect pet lovers with their ideal furry
            companions.
          </p>
          <div className="footer">
            <p>Pet Finder &copy; 2023 All Rights Reserved</p>
          </div>
        </center>
      </div>
    </div>
  );
}
