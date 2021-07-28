import "./CollectionOverview.style.scss";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      <h1 className="title">Collections</h1>
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
