import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Footer2 = () => {
  const navigate = useNavigate();

  const onHomepageTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCVAnalysisTextClick = useCallback(() => {
    navigate("/list");
  }, [navigate]);

  return (
    <div className="self-stretch bg-background-secondary flex flex-col py-10 px-[195px] items-center justify-start gap-[30px] text-left text-3xl text-text font-h5-space-mono">
      <div className="flex flex-row items-start justify-start gap-[31px]">
        <div className="w-[358px] shrink-0 flex flex-row items-start justify-start">
          <b className="relative leading-[160%] capitalize">Explore</b>
        </div>
        <div className="w-[217px] shrink-0 flex flex-col items-start justify-start text-base text-lightgray font-h1-work-sans">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div
              className="relative leading-[140%] cursor-pointer"
              onClick={onHomepageTextClick}
            >
              Homepage
            </div>
            <div
              className="relative leading-[140%] cursor-pointer"
              onClick={onCVAnalysisTextClick}
            >
              CV Analysis
            </div>
            <div className="relative leading-[140%]">Profile</div>
          </div>
        </div>
      </div>
      <div className="w-[1049.41px] flex flex-col items-start justify-start gap-[20px] text-xs text-lightgray font-h1-work-sans">
        <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-caption-label-text" />
        <div className="self-stretch relative leading-[110%]">Ⓒ Sumer</div>
      </div>
    </div>
  );
};

export default Footer2;
