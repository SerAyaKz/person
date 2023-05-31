import Navigation2 from "../components/Navigation2";
import Info from "../components/Info";
import Chart from "../components/Chart";
import Footer3 from "../components/Footer3";

const CVAnalysis = () => {
  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start">
      <Navigation2 />
      <Info />
      <Chart />
      <Footer3 />
    </div>
  );
};

export default CVAnalysis;
