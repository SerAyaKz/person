import { useMemo } from "react";

const Header = ({
  onNavLogoClick,
  image1,
  onMarketplaceContainerClick,
  marketplaceCursor,
  rocketLaunch,
  onRankingsContainerClick,
  rankingsCursor,
  onConnectAWalletClick,
  onSignUpContainerClick,
  user1,
}) => {
  const marketplaceStyle = useMemo(() => {
    return {
      cursor: marketplaceCursor,
    };
  }, [marketplaceCursor]);

  const rankingsStyle = useMemo(() => {
    return {
      cursor: rankingsCursor,
    };
  }, [rankingsCursor]);

  return (
    <div className="self-stretch bg-background flex flex-row py-5 px-[50px] items-center justify-between text-center text-13xl text-call-to-action font-h1-work-sans">
      <div
        className="w-[87px] h-[29px] shrink-0 flex flex-row items-center justify-start gap-[10px] cursor-pointer"
        onClick={onNavLogoClick}
      >
        <img
          className="relative w-10 h-[40.38px] shrink-0 object-cover"
          alt=""
          src={image1}
        />
        <div className="relative leading-[140%] font-semibold">Sumer</div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[10px] text-base text-text">
        <div
          className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px]"
          onClick={onMarketplaceContainerClick}
          style={marketplaceStyle}
        >
          <img
            className="relative w-5 h-5 shrink-0 hidden"
            alt=""
            src={rocketLaunch}
          />
          <div className="relative leading-[140%] font-semibold">Homepage</div>
        </div>
        <div
          className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onRankingsContainerClick}
          style={rankingsStyle}
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
          <img className="relative w-5 h-5 shrink-0" alt="" src={user1} />
          <div className="relative leading-[140%] font-semibold">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
