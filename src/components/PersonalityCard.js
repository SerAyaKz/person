const PersonalityCard = ({ imageIds, smallImageIds, assessmentType }) => {
  return (
    <div className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start text-left text-3xl text-text font-h1-work-sans">
      <div className="self-stretch relative rounded-t-xl rounded-b-none h-60 shrink-0">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imageIds}
          />
        </div>
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray [backdrop-filter:blur(15px)] h-60 flex flex-row items-center justify-center">
          <img
            className="relative w-[100px] h-[100px] shrink-0"
            alt=""
            src={smallImageIds}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
        <div className="self-stretch relative leading-[140%] capitalize font-semibold">
          {assessmentType}
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
