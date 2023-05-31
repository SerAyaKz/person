import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeadlineSubhead from "../components/HeadlineSubhead";
import Button from "../components/Button";
import Rankings from "../components/Rankings";
import Footer1 from "../components/Footer1";

const List = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <div className="relative bg-background w-full flex flex-col items-center justify-start">
      <Header
        onNavLogoClick={onNavLogoClick}
        image1="/image-1@2x.png"
        onMarketplaceContainerClick={onMarketplaceContainerClick}
        marketplaceCursor="pointer"
        rocketLaunch="/rocketlaunch.svg"
        rankingsCursor="unset"
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
        user1="/user1.svg"
      />
      <HeadlineSubhead />
      <Button />
      <Rankings />
      <Footer1 />
    </div>
  );
};

export default List;
