const Button = () => {
  return (
    <div className="rounded-xl bg-background-secondary h-[46px] shrink-0 flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] text-center text-base text-text font-h1-work-sans">
      <img
        className="relative w-5 h-5 shrink-0 hidden"
        alt=""
        src="/wallet.svg"
      />
      <div className="relative leading-[140%] uppercase font-semibold">
        Upload cv
      </div>
    </div>
  );
};

export default Button;
