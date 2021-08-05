import "./HomePage.style.scss";
import Directory from "../../components/Directory/Directory.component";
import { HomePageContainer } from "./HomePage.style.jsx";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
