import "./MenuItem.style.scss";

const MenuItem = ({ imageUrl, size, title, linkUrl }) => {
  return (
    <div className={`menu-item ${size ? "large" : ""}`}>
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

export default MenuItem;
