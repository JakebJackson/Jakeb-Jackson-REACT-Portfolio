import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="h-100">
      <h1 className="mb-4 text-success text-center">My Projects</h1>
      <hr className="border-light border-2" />
      <div className="card border border-1 rounded-4 mb-3 bg-onyx shadow">
        <Link target="_blank" to="https://github.com/JakebJackson/Avalanche-Tech" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

          <div className="d-flex align-items-stretch w-25 flex-grow-1">
            <img src="./images/Deployed-Avalanche-Tech.png" className="img-fluid rounded-start-4 img-match-height" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          
          <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">Avalanche Tech</h5>
            <p className="card-text text-white">This web application allows users to create custom build orders for a Desktop Computer.  <br/>  <br/> This was my final project for the Monash University Bootcamp and is still an ongoing project I really enjoyed making this and am still working on the features that are not yet implemented.</p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

        </Link>
      </div>

      <div className="card border border-1 rounded-4 mb-3 bg-onyx shadow">
        <Link target="_blank" to="https://github.com/JakebJackson/Apollo-Book-Finder" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

            <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">Apollo Book Finder</h5>
            <p className="card-text text-white">This web application allows users to create custom build orders for a Desktop Computer.  <br/>  <br/> The goal of this project was to convert a pre-existing backend into a RESTful API that utilises Apollo and GraphQL for all API routing.</p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

          <div className="d-flex align-items-stretch w-25">
            <img src="./images/Apollo-Book-Finder-Screenshot.png" className="img-fluid rounded-end-4" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          

        </Link>
      </div>

      <div className="card border border-1 rounded-4 mb-3 bg-onyx shadow">
        <Link target="_blank" to="https://github.com/JakebJackson/Titan-Tech-Blog" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

          <div className="d-flex align-items-stretch w-25">
            <img src="./images/DeployedTitanTech.png" className="img-fluid rounded-start-4" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          
          <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">Titan Tech Blog</h5>
            <p className="card-text text-white">A web based blog that utilises sequelize to dynamically generate posts from users onto each users web page.
            <br/>  <br/> 
            This was my first full-stack web application, utilising handlebars, sequelize, node and express. As it currently stands it is a very basic blog but could easily be built upon by adding comments and a few QOL changes.
            </p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

        </Link>
      </div>

      <div className="card border border-1 rounded-4 mb-3 bg-onyx shadow">
        <Link target="_blank" to="https://github.com/JakebJackson/Local-Lens" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

            <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">Local Lens</h5>
            <p className="card-text text-white">This project combines both the use of the Adzuna API and the Google Maps API, granting all users the ability to readily access 10 job listings per search in a given area, a given job title whether it be for research use, career planning, or general interest.
            <br/>
            This was a group project (the other members are listed as contributors in the repository), and honestly was probably some of the most fun I have had developing a project. The Google Maps API is so much fun to use and it is very cool being able to directly interact with an application that I use on an almost daily basis.
            </p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

          <div className="d-flex align-items-stretch w-25 flex-grow-1">
            <img src="./images/Local-Lens-Screenshot.png" className="img-fluid rounded-end-4 img-match-height" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          

        </Link>
      </div>

      <div className="card border border-1 rounded-4 mb-3 bg-onyx shadow">
        <Link target="_blank" to="https://github.com/JakebJackson/WeatherWise" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

          <div className="d-flex align-items-stretch w-25">
            <img src="./images/WeatherWise-screenshot.png" className="img-fluid rounded-start-4" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          
          <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">WeatherWise</h5>
            <p className="card-text text-white">A weather dashboard application, that utilises a weather API to update the user on weather conditions in a specified area.
            <br/> 
            This was one of the projects that required me to implement a third-party API in this case I chose the OpenWeather API, it is a fairly simple application but any project where I do not have to gather data myself is a fun project in my eyes.
            </p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

        </Link>
      </div>

      <div className="card border border-1 rounded-4 mb-3 bg-onyx shadow">
        <Link target="_blank" to="https://github.com/JakebJackson/Avalanche-Tech" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

            <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">Apollo Book Finder</h5>
            <p className="card-text text-white">A very basic text editor that displays JavaScript colour coding within the editor.
              <br /> <br />
              This was my first (and so far only) Progressive Web Application (PWA), which essentially, at least in the context of this project, just means it is downloadable and usable offline. I would like to make another PWA in the future, they are a very cool concept and I decided to put this one in my portfolio because it is unique compared to my other projects.
            </p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

          <div className="d-flex align-items-stretch w-25">
            <img src="./images/Apollo-Book-Finder-Screenshot.png" className="img-fluid rounded-end-4" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          

        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
