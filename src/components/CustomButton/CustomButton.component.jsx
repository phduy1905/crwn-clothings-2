import "./CustomButton.style.scss";

const CustomButton = ({ children, isGoogleAuth, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleAuth ? "google-auth" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
