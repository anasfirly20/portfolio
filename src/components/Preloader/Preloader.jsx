// Preloader
import { BarLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center text-center">
      <BarLoader size={100} color="#2D2B2B" width="150" speedMultiplier="1" />
    </div>
  );
};

export default Preloader;
