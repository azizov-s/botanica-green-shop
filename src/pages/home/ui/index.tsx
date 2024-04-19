import { LoginCurve } from "iconsax-react";
import UI from "../../../shared/ui";

const Home = () => {
  return (
    <div className="w-full">
      <div className="rounded-small px-7"></div>
      <UI.Button size="md" color="default">
        {/* <LoginCurve size={17}/> */}
        login
      </UI.Button>
    </div>
  );
};

export default Home;
