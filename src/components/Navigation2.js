import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navigation2 = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    <div className="self-stretch bg-background flex flex-row py-5 px-[50px] items-center justify-between text-center text-13xl text-call-to-action font-h1-work-sans">
      <div
        className="w-[87px] h-[29px] shrink-0 flex flex-row items-center justify-start gap-[10px] cursor-pointer"
        onClick={onNavLogoClick}
      >
        <img
          className="relative w-10 h-[40.38px] shrink-0 object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="relative leading-[140%] font-semibold">Sumer</div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[10px] text-base text-text">
        <div
          className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onMarketplaceContainerClick}
        >
          <img
            className="relative w-5 h-5 shrink-0 hidden"
            alt=""
            src="/rocketlaunch.svg"
          />
          <div className="relative leading-[140%] font-semibold">Homepage</div>
        </div>
        <div
          className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onRankingsContainerClick}
        >
          <img
            className="relative w-5 h-5 shrink-0 hidden"
            alt=""
            src="/rocketlaunch.svg"
          />
          <div className="relative leading-[140%] font-semibold">
            CV Analysis
          </div>
        </div>
        <div
          className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onConnectAWalletClick}
        >
          <img
            className="relative w-5 h-5 shrink-0 hidden"
            alt=""
            src="/rocketlaunch.svg"
          />
          <div className="relative leading-[140%] font-semibold">Profile</div>
        </div>
        <div
          className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onSignUpContainerClick}
        >
          <img className="relative w-5 h-5 shrink-0" alt="" src="/user1.svg" />
          <div className="relative leading-[140%] font-semibold">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation2;
