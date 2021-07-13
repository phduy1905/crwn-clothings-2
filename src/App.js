import "./App.css";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./components/Firebase/firebase.utils";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInSignUpPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
