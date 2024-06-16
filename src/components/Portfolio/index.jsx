import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section>
      <h1 className="mb-4 text-success text-center">My Projects:</h1>
      <hr className="border-white border-2" />
      <div className="card border border-1 rounded-4 mb-3 bg-onyx">
        <Link target="_blank" to="https://github.com/JakebJackson/Avalanche-Tech" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
          style={{
            "--bs-hover-ring-color": "white",
            "--bs-hover-ring-blur": "25px",
            "--bs-hover-ring-width": "25px"
          }}>

          <div className="d-flex align-items-stretch w-25">
            <img src="./images/Deployed-Avalanche-Tech.png" className="img-fluid rounded-start-4" alt="Image of Deployed Avalanche Tech Website"/>
          </div>
          
          <div className="card-body flex-grow-1 d-flex flex-column justify-content-between w-75">
            <h5 className="card-title text-success">Avalanche Tech</h5>
            <p className="card-text text-white">This web application allows users to create custom build orders for a Desktop Computer.  <br/>  <br/> This was my final project for the Monash University Bootcamp and is still an ongoing project I really enjoyed making this and am still working on the features that are not yet implemented.</p>
            <p className="card-text"><small className="text-l-blue">Click on the card for the GitHub Repository</small></p>
          </div>

        </Link>
      </div>

      <div className="card border border-1 rounded-4 mb-3 bg-onyx">
        <Link target="_blank" to="https://github.com/JakebJackson/Avalanche-Tech" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
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

      <div className="card border border-1 rounded-4 mb-3 bg-onyx">
        <Link target="_blank" to="https://github.com/JakebJackson/Avalanche-Tech" className="hover-ring text-decoration-none border-4 rounded-4 d-flex md-flex-row"
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
    </section>
  );
}

export default Portfolio;
