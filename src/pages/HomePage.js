import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorksContainer from "../components/HowItWorksContainer";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    window.open("https://moodle.astanait.edu.kz/login/index.php");
  }, []);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/list");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start">
      <Header
        onNavLogoClick={onNavLogoClick}
        image1="/image-1@2x.png"
        rocketLaunch="/rocketlaunch.svg"
        onRankingsContainerClick={onRankingsContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
        user1="/user.svg"
      />
      <HeroSection />
      <HowItWorksContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
