import Navigation3 from "../components/Navigation3";
import CreateAccountSection from "../components/CreateAccountSection";
import Footer4 from "../components/Footer4";

const CreateAccount = () => {
  return (
    <div className="relative bg-background w-full h-[969px] flex flex-col pt-0 px-0 pb-[152px] box-border items-start justify-start">
      <Navigation3 />
      <CreateAccountSection />
      <Footer4 />
    </div>
  );
};

export default CreateAccount;
