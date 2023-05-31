import DataContainer from "./DataContainer";

const HowItWorksContainer = () => {
  return (
    <div className="self-stretch bg-background flex flex-col py-20 px-[195px] items-center justify-start gap-[48px] text-left text-19xl text-text font-h1-work-sans">
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="relative leading-[120%] capitalize font-semibold inline-block w-[1050px]">
          How it works
        </div>
        <div className="relative text-3xl leading-[160%] capitalize inline-block w-[1050px]">
          Find out how to get started
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[30px] text-center text-3xl">
        <DataContainer
          icon="/icon.svg"
          setupYourWallet="Acquire the necessary data and input it into the system"
          setUpYourWalletOfChoiceCo="Gather relevant resumes and input them into the personality prediction system to analyze the language and identify personality traits."
        />
        <DataContainer
          icon="/icon1.svg"
          setupYourWallet="Train the system"
          setUpYourWalletOfChoiceCo="Train the personality prediction system by providing it with a sufficient amount of data so it can accurately identify personality traits and provide accurate predictions."
          propFlex="unset"
          propWidth="330px"
          propFlexShrink="0"
        />
        <DataContainer
          icon="/icon.svg"
          setupYourWallet="Interpret the results"
          setUpYourWalletOfChoiceCo="Analyze the results from the personality prediction system and use them to inform your hiring decisions, identifying candidates that are a good fit for your organization based on their personality traits."
          propFlex="unset"
          propWidth="330px"
          propFlexShrink="0"
        />
      </div>
    </div>
  );
};

export default HowItWorksContainer;
