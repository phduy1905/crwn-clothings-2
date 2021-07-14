import { Component } from "react";
import "./SignIn.style.scss";
import InputForm from "../InputForm/InputForm.component";
import CustomButton from "../CustomButton/CustomButton.component";
import { auth, signInWithGoogle } from "../Firebase/firebase.utils";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <InputForm
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
          />
          <InputForm
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
          />
          <div className="button-container">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton isGoogleAuth onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
