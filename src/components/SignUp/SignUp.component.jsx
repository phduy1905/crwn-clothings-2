import { Component } from "react";
import "./SignUp.style.scss";
import InputForm from "../InputForm/InputForm.component";
import CustomButton from "../CustomButton/CustomButton.component";
import { auth, createUserProfileDocument } from "../Firebase/firebase.utils";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign Up now</span>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <InputForm
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <InputForm
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <InputForm
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
