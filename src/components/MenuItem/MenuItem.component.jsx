import "./MenuItem.style.scss";
import { withRouter } from "react-router";

const MenuItem = ({ imageUrl, size, title, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item ${size ? "large" : ""}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
