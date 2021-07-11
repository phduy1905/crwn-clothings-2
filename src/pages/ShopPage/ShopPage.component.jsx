import { Component } from "react";
import "./ShopPage.style.scss";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";
import SHOP_DATA from "./ShopData.component";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1 className="title">Collections</h1>
        {collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
