import { useCallback } from "react";

const Profile1 = () => {
  const onMetamaskContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onWalletConnectContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onCoinbaseContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="self-stretch bg-background flex flex-row items-center justify-start gap-[60px] text-left text-32xl text-text font-h1-work-sans">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-placeholder5@2x.png"
      />
      <div className="flex-1 flex flex-col py-[100px] px-0 items-start justify-start gap-[40px]">
        <div className="w-[460px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[110%] capitalize font-semibold">
                Serikov Ayanbek
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-3xl">
              <div className="self-stretch relative leading-[160%]">
                <p className="m-0">Date of birth: 08.06.2001</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Email: ayanbek.as@gmail.com</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Linkedin:
                  https://www.linkedin.com/in/ayanbek-serikov-994502185/
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Number of CV analysis requests: 7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 hidden flex-col items-start justify-start gap-[20px] text-3xl">
          <div
            className="self-stretch rounded-xl bg-background-secondary box-border h-[72px] shrink-0 hidden flex-row py-0 pr-5 pl-10 items-center justify-start gap-[20px] cursor-pointer border-[1px] border-solid border-call-to-action"
            onClick={onMetamaskContainerClick}
          >
            <img
              className="relative w-10 h-10 shrink-0"
              alt=""
              src="/metamask.svg"
            />
            <div className="flex-1 relative leading-[140%] capitalize font-semibold">
              Metamask
            </div>
          </div>
          <div
            className="self-stretch rounded-xl bg-background-secondary box-border h-[72px] shrink-0 flex flex-row py-0 pr-5 pl-10 items-center justify-start gap-[20px] cursor-pointer border-[1px] border-solid border-call-to-action"
            onClick={onWalletConnectContainerClick}
          >
            <img
              className="relative w-10 h-10 shrink-0"
              alt=""
              src="/walletconnect.svg"
            />
            <div className="flex-1 relative leading-[140%] capitalize font-semibold">
              Wallet Connect
            </div>
          </div>
          <div
            className="self-stretch rounded-xl bg-background-secondary box-border h-[72px] shrink-0 flex flex-row py-0 pr-5 pl-10 items-center justify-start gap-[20px] cursor-pointer border-[1px] border-solid border-call-to-action"
            onClick={onCoinbaseContainerClick}
          >
            <img
              className="relative w-10 h-10 shrink-0"
              alt=""
              src="/coinbase.svg"
            />
            <div className="flex-1 relative leading-[140%] capitalize font-semibold">
              Coinbase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
