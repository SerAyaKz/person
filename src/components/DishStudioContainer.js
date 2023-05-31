const DishStudioContainer = () => {
  return (
    <div className="flex-1 h-[510px] flex flex-col items-center justify-start text-left text-3xl text-text font-h1-work-sans">
      <div className="rounded-xl bg-background-secondary w-[307px] hidden flex-row p-5 box-border items-center justify-start gap-[12px]">
        <div className="flex flex-row items-start justify-start">
          <div className="relative w-[60px] h-[60px] shrink-0">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/avatar-placeholder@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch relative leading-[140%] capitalize font-semibold">
            Dish Studio
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-base text-caption-label-text">
            <div className="flex-1 relative leading-[140%]">Total Sales:</div>
            <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
              34.53 ETH
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-placeholder@2x.png"
      />
      <div className="rounded-xl bg-background-secondary box-border w-[280px] hidden flex-row py-5 px-[30px] items-center justify-between text-xs text-caption-label-text font-h5-space-mono border-[1px] border-solid border-caption-label-text">
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="w-[89px] flex flex-row items-start justify-start">
            <div className="relative leading-[110%] inline-block w-[52px] shrink-0">
              Price:
            </div>
          </div>
          <div className="w-[89px] flex flex-row items-start justify-start text-base text-text">
            <div className="relative leading-[140%] inline-block w-[89px] shrink-0">
              1.63 ETH
            </div>
          </div>
        </div>
        <div className="w-[113px] shrink-0 flex flex-col items-end justify-center gap-[5px] text-right">
          <div className="w-[113px] flex flex-row items-start justify-end">
            <div className="relative leading-[110%] inline-block w-[113px] shrink-0">
              Release Date:
            </div>
          </div>
          <div className="w-[113px] flex flex-row items-end justify-end text-base text-text">
            <div className="relative leading-[140%] inline-block w-[113px] shrink-0">
              2 Sep 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishStudioContainer;
