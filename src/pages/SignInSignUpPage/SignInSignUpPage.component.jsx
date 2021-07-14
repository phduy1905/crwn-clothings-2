import "./SignInSignUpPage.style.scss";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

const SignInSignUpPage = () => {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
