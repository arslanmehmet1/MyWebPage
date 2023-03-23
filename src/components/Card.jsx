import { useNavigate } from "react-router-dom";

const Card = (data) => {
  console.log("ne geliyo", data);
  const { title, image, desc, style, live, techno } = data;
  const navigate = useNavigate();
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
          <button
            type="button"
            class="btn btn-success"
            onClick={() => navigate("{live}")}
          >
            Live Project
          </button>
        </p>
      </div>
    </div>
  );
};

export default Card;
