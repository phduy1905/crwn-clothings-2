import "./ShopPage.style.scss";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview.component";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage.component";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <BrowserRouter>
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route
            path={`${match.path}/:collectionID`}
            component={CollectionPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default ShopPage;
