// Preloader
import { BarLoader } from "react-spinners";
import logoAF from "../../assets/af-logo.png";

const Preloader = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center text-center">
      <img
        src={logoAF}
        alt="logo"
        className="mb-[2vh] h-[80px] w-[80px] rounded-full"
      />
      <BarLoader size={100} color="#2D2B2B" width="150" speedMultiplier="1" />
    </div>
  );
};

export default Preloader;
