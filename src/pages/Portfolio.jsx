import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/Portfolio.css";
import gamersHub from "../assets/images/gamers-hub.png";
import travelJournal from "../assets/images/travel-journal.jpg";

export default function Portfolio() {
  const repos = [
    {
      name: "The Gamers Hub",
      thumbnail: gamersHub,
      html_url: "https://github.com/SithHun/Gamers-Hub",
    },
    {
      name: "Travel Journal",
      thumbnail: travelJournal,
      html_url: "https://github.com/SithHun/Travel-Journal-Diary",
    },
    // Add more projects here...
  ];

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  return (
    <div className="projects-container">
      <h2 className="portfolio-header">Portfolio</h2>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {repos.map((repo, index) => (
          <div className="card" key={index} onClick={() => openNewTab(repo.html_url)}>
            <h3>{repo.name}</h3>
            <img
              className="img"
              src={repo.thumbnail}
              alt="#"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
