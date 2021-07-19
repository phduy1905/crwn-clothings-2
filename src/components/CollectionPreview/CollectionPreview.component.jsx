import "./CollectionPreview.style.scss";
import CollectionItem from "../CollectionItem/CollectionItem.component";

const CollectionPreview = (props) => {
  const items = props.items;
  return (
    <div className="collection-preview">
      <h2 className="title">{props.title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((_, idx) => {
            return idx < 4;
          })
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
