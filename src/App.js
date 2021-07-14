import "./App.css";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./components/Firebase/firebase.utils";
import { Component } from "react";
import { createUserProfileDocument } from "./components/Firebase/firebase.utils";
class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
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
