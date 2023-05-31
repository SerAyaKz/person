import Navigation1 from "../components/Navigation1";
import Profile1 from "../components/Profile1";
import Footer2 from "../components/Footer2";

const Profile = () => {
  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start">
      <Navigation1 />
      <Profile1 />
      <Footer2 />
    </div>
  );
};

export default Profile;
