import "./ShopPage.style.scss";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview.component";
import { Route, Switch } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { Component } from "react";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../components/Firebase/firebase.utils";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "../CollectionPage/CollectionPage.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              render={(props) => (
                <CollectionsOverviewWithSpinner
                  isLoading={loading}
                  {...props}
                />
              )}
            />
            <Route
              path={`${match.path}/:collectionId`}
              render={(props) => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
