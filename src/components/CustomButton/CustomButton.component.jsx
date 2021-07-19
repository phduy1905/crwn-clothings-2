import "./CustomButton.style.scss";

const CustomButton = ({ children, isGoogleAuth, inverted, ...otherProps }) => {
  return (
    <button
      className={`${
        inverted ? "inverted" : ""
      } {isGoogleAuth ? "google-auth" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
