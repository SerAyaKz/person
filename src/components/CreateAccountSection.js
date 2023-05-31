const CreateAccountSection = () => {
  return (
    <div className="self-stretch bg-background flex flex-row items-center justify-start gap-[60px] text-left text-32xl text-text font-h1-work-sans">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-placeholder10@2x.png"
      />
      <div className="flex-1 flex flex-col py-[100px] px-0 items-start justify-start gap-[40px]">
        <div className="w-[460px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[110%] capitalize font-semibold">
                Create account
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-3xl">
              <div className="self-stretch relative leading-[160%] capitalize">
                Unlock your full potential with just a few clicks - Create
                personality profile today!
              </div>
            </div>
          </div>
        </div>
        <div className="w-[330px] flex flex-col items-start justify-start gap-[30px] text-base text-background">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch rounded-xl bg-text box-border h-[46px] shrink-0 flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
              <img
                className="relative w-5 h-5 shrink-0"
                alt=""
                src="/user2.svg"
              />
              <div className="flex-1 relative leading-[140%]">Username</div>
              <img
                className="relative w-5 h-5 shrink-0 hidden"
                alt=""
                src="/eyeslash.svg"
              />
            </div>
            <div className="self-stretch rounded-xl bg-text box-border h-[46px] shrink-0 flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
              <img
                className="relative w-5 h-5 shrink-0"
                alt=""
                src="/envelopesimple1.svg"
              />
              <div className="flex-1 relative leading-[140%]">
                Email Address
              </div>
              <img
                className="relative w-5 h-5 shrink-0 hidden"
                alt=""
                src="/eyeslash.svg"
              />
            </div>
            <div className="self-stretch rounded-xl bg-text box-border h-[46px] shrink-0 flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
              <img
                className="relative w-5 h-5 shrink-0"
                alt=""
                src="/lockkey.svg"
              />
              <div className="flex-1 relative leading-[140%]">Password</div>
              <img
                className="relative w-5 h-5 shrink-0 hidden"
                alt=""
                src="/eyeslash.svg"
              />
            </div>
            <div className="self-stretch rounded-xl bg-text box-border h-[46px] shrink-0 flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
              <img
                className="relative w-5 h-5 shrink-0"
                alt=""
                src="/lockkey.svg"
              />
              <div className="flex-1 relative leading-[140%]">
                Confirm Password
              </div>
              <img
                className="relative w-5 h-5 shrink-0 hidden"
                alt=""
                src="/eyeslash.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-call-to-action h-[46px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] text-center text-text">
            <img
              className="relative w-5 h-5 shrink-0 hidden"
              alt=""
              src="/rocketlaunch1.svg"
            />
            <div className="relative leading-[140%] font-semibold">
              Create account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountSection;
