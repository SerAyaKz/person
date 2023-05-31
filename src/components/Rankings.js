import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Rankings = () => {
  const navigate = useNavigate();

  const onTableItemsContainerClick = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  const onTableItemsContainer3Click = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  const onTableItemsContainer5Click = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  const onTableItemsContainer7Click = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  const onTableItemsContainer9Click = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  const onTableItemsContainer11Click = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  const onTableItemsContainer13Click = useCallback(() => {
    navigate("/cv-analysis");
  }, [navigate]);

  return (
    <div className="self-stretch bg-background flex flex-col py-10 px-0 items-center justify-start gap-[20px] text-center text-base text-caption-label-text font-h5-space-mono">
      <div className="rounded-xl box-border w-[1052px] h-12 shrink-0 flex flex-col py-3 px-0 items-center justify-start border-[1px] border-solid border-background-secondary">
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="relative leading-[140%] inline-block w-[30px] shrink-0">
              #
            </div>
            <div className="relative leading-[140%] text-left">Title</div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">Date</div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">Status</div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                Actions
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start">
        <div
          className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between cursor-pointer"
          onClick={onTableItemsContainerClick}
        >
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                1
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Alexej Timeus CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000]">
                VIEW
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
        onClick={onTableItemsContainer3Click}
      >
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                2
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Nonhelema Kullervo CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">VIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
        onClick={onTableItemsContainer5Click}
      >
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                3
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder3@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Wulfrun Oddbjørg CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">VIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
        onClick={onTableItemsContainer7Click}
      >
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                4
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder4@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Victor Beppe CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">VIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
        onClick={onTableItemsContainer9Click}
      >
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                5
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder5@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Altan Mainchín CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">VIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
        onClick={onTableItemsContainer11Click}
      >
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                6
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder6@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Märtha Ferkó CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">VIEW</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
        onClick={onTableItemsContainer13Click}
      >
        <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
          <div className="w-[430px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
            <div className="rounded-xl bg-background w-[30px] shrink-0 flex flex-row items-start justify-start relative">
              <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                7
              </div>
            </div>
            <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h1-work-sans">
              <div className="hidden flex-col items-end justify-start z-[0]">
                <div className="w-[60px] hidden flex-row items-start justify-start z-[0]">
                  <div className="relative w-[60px] h-[60px] shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar-placeholder7@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Mariama Hughard CV
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] shrink-0 hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start text-green">
              <div className="self-stretch relative leading-[140%]">
                13/10/2022 09:49:58
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">
                IN CHECK
              </div>
            </div>
            <div className="w-40 shrink-0 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[140%]">VIEW</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
