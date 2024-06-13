function Portfolio() {
  return (

    <div className="card border border-1 rounded-4 bg-onyx">
      <a href="#" className="hover-ring text-decoration-none border-4 rounded-4"
        style={{
          "--bs-hover-ring-color": "rgba(180, 142, 174, 1)",
          "--bs-hover-ring-blur": "25px",
          "--bs-hover-ring-width": "25px"
        }}>
        <img src="./images/DeployedTitanTech.png" className="card-img-top rounded-top-4 w-100" alt="Image of Deployed Avalanche Tech Website" style={{}} />
        <div className="card-body">
          <h5 className="card-title text-lilac">Avalanche Tech</h5>
          <p className="card-text text-fawn">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-l-blue">Last updated 3 mins ago</small></p>
        </div>
      </a>
    </div>
  );
}

export default Portfolio;
