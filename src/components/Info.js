import { useCallback } from "react";

const Info = () => {
  const onGlobeIconClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onViewOnEtherscanClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onGlobeIcon1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onViewOriginalTextClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="self-stretch bg-background flex flex-col py-10 px-0 items-center justify-start text-left text-3xl text-text font-h1-work-sans">
      <div className="w-[1050px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[150px]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                Alexej Timeus CV
              </div>
              <div className="self-stretch relative text-base leading-[140%] font-h5-space-mono text-green">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-caption-label-text font-h5-space-mono">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <b className="self-stretch relative leading-[160%] capitalize">
                  Created By
                </b>
                <div className="self-stretch rounded-xl flex flex-row items-center justify-start gap-[12px] text-text font-h1-work-sans">
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative w-6 h-6 shrink-0">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder8@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex-1 relative leading-[140%] capitalize font-semibold">
                    Ayanbek
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <b className="relative leading-[160%] capitalize inline-block w-[510px]">
                  Description
                </b>
                <div className="self-stretch relative leading-[160%] font-h1-work-sans text-text text-justify">
                  <p className="m-0">
                    Based on an analysis of Alexej Timeus's CV, our personality
                    prediction system suggests that he is a highly ambitious,
                    driven, and detail-oriented individual with strong
                    analytical and problem-solving skills.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Alexej's educational background and work experience
                    demonstrate a clear passion for technology and innovation,
                    as he has pursued a degree in computer science and worked in
                    various roles within the tech industry. His proficiency in
                    programming languages such as Java, C++, and Python, as well
                    as his experience in database management and web
                    development, indicate a deep understanding of the technical
                    aspects of his field.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Overall, our analysis suggests that Alexej Timeus is a
                    highly competent and driven individual with a strong work
                    ethic and a deep passion for technology and innovation. He
                    is a natural problem-solver who is able to think logically
                    and systematically, and is well-equipped to take on complex
                    technical challenges in a variety of settings.
                  </p>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-start gap-[10px] text-text font-h1-work-sans">
                <b className="self-stretch relative leading-[160%] capitalize font-h5-space-mono text-caption-label-text">
                  Details
                </b>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="relative w-8 h-8 shrink-0 cursor-pointer"
                    alt=""
                    src="/globe.svg"
                    onClick={onGlobeIconClick}
                  />
                  <div
                    className="flex-1 relative leading-[160%] cursor-pointer"
                    onClick={onViewOnEtherscanClick}
                  >
                    View on Etherscan
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="relative w-8 h-8 shrink-0 cursor-pointer"
                    alt=""
                    src="/globe.svg"
                    onClick={onGlobeIcon1Click}
                  />
                  <div
                    className="flex-1 relative leading-[160%] cursor-pointer"
                    onClick={onViewOriginalTextClick}
                  >
                    View Original
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] font-h1-work-sans">
                <div className="relative leading-[140%] capitalize font-semibold">
                  Tags
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-center text-base text-text">
                  <div className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px]">
                    <img
                      className="relative w-5 h-5 shrink-0 hidden"
                      alt=""
                      src="/wallet.svg"
                    />
                    <div className="relative leading-[140%] uppercase font-semibold">
                      JAVA
                    </div>
                  </div>
                  <div className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px]">
                    <img
                      className="relative w-5 h-5 shrink-0 hidden"
                      alt=""
                      src="/wallet.svg"
                    />
                    <div className="relative leading-[140%] uppercase font-semibold">
                      C++
                    </div>
                  </div>
                  <div className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px]">
                    <img
                      className="relative w-5 h-5 shrink-0 hidden"
                      alt=""
                      src="/wallet.svg"
                    />
                    <div className="relative leading-[140%] uppercase font-semibold">
                      Python
                    </div>
                  </div>
                  <div className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] text-3xl">
                    <img
                      className="relative w-5 h-5 shrink-0 hidden"
                      alt=""
                      src="/wallet.svg"
                    />
                    <div className="relative leading-[160%]">
                      problem-solving skills
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-background-secondary w-[295px] shrink-0 hidden flex-col p-[30px] box-border items-start justify-start gap-[30px] text-xs font-h5-space-mono">
            <div className="self-stretch rounded-xl bg-darkslategray [backdrop-filter:blur(10px)] flex flex-col items-start justify-end gap-[10px]">
              <div className="self-stretch relative leading-[110%]">
                Auction ends in:
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-19xl">
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <b className="self-stretch relative leading-[120%] capitalize">
                    59
                  </b>
                  <div className="self-stretch flex-1 relative text-xs leading-[110%]">
                    Hours
                  </div>
                </div>
                <b className="relative text-9xl leading-[140%] capitalize">:</b>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <b className="self-stretch relative leading-[120%] capitalize">
                    59
                  </b>
                  <div className="self-stretch flex-1 relative text-xs leading-[110%]">
                    Minutes
                  </div>
                </div>
                <b className="relative text-9xl leading-[140%] capitalize">:</b>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <b className="self-stretch relative leading-[120%] capitalize">
                    59
                  </b>
                  <div className="self-stretch flex-1 relative text-xs leading-[110%]">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-call-to-action h-[60px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] text-center text-base font-h1-work-sans">
              <img
                className="relative w-5 h-5 shrink-0 hidden"
                alt=""
                src="/wallet1.svg"
              />
              <div className="relative leading-[140%] font-semibold">
                Place Bid
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
