import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HeroContainer = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[30px] text-left text-48xl text-text font-h1-work-sans">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="flex-1 relative leading-[110%] capitalize font-semibold flex items-center w-[510px]">
          Discover the power of self-awareness
        </div>
        <div className="self-stretch relative text-3xl leading-[160%] capitalize">
          Sumer uses machine learning to analyze a person's resume and generate
          insights into their personality traits.
        </div>
      </div>
      <div
        className="rounded-xl bg-call-to-action h-[60px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-base"
        onClick={onButtonContainerClick}
      >
        <img
          className="relative w-5 h-5 shrink-0"
          alt=""
          src="/rocketlaunch.svg"
        />
        <div className="relative leading-[140%] font-semibold">Get Started</div>
      </div>
      <div className="self-stretch rounded-xl flex flex-row items-start justify-start gap-[30px] text-9xl font-h5-space-mono">
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[140%] capitalize">{`2k+ `}</b>
          <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h1-work-sans">
            Clients
          </div>
        </div>
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[140%] capitalize">
            90-95%
          </b>
          <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h1-work-sans">
            Accuracy
          </div>
        </div>
        <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[140%] capitalize">
            10k+
          </b>
          <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h1-work-sans">
            Requests
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
