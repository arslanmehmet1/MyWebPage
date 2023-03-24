const Card = (data) => {
  console.log("ne geliyo", data);
  const { title, image, desc, style, live, techno, source } = data;

  return (
    <div className="cards">
      <div className="titlediv">
        <h1 className="title">{title}</h1>
      </div>
      <img src={image} alt="" />
      <div className="card-over">
        <h3>
          {" "}
          <span style={{ color: "#ace0f9" }}>Tools :</span> {techno}{" "}
        </h3>
        <h3>
          <span style={{ color: "#ace0f9" }}>Style :</span> {style}{" "}
        </h3>
        <p>
          {desc}{" "}
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button type="button" class="btn btn-success">
              Live Project
            </button>
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer">
            <button type="button" class="btn btn-secondary ms-1">
              Source Code
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
