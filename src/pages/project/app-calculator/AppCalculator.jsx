import Button from "../../../components/Button";
import AppCalculatorDisplay from "./components/AppCalculatorDisplay";
import { motion } from "framer-motion";
import ComingSoon from "../../coming-soon/ComingSoon";

const AppCalculator = () => {
  return (
    // <motion.section
    //   className="min-h-screen w-full font-acumin font-semibold"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 1 }}
    // >
    //   <div className="py-52">
    //     <div className="h-[500px] w-[19rem] bg-[#000300] mx-auto rounded-xl hover:shadow-lg hover:shadow-[#000300] break-all overflow-hidden">
    //       <AppCalculatorDisplay />
    //       <div className="flex justify-evenly mt-2 text-black text-md">
    //         <Button text="AC" className="bg-[#a5a5a5] rounded-full" />
    //         <Button text="+/-" className="bg-[#a5a5a5] rounded-full" />
    //         <Button text="%" className="bg-[#a5a5a5] rounded-full" />
    //         <Button
    //           text="÷"
    //           className="w-[3.5rem] h-[3.5rem] bg-[#f69807] text-white rounded-full"
    //         />
    //       </div>
    //       <div className="flex justify-evenly mt-2 text-slate-50 text-lg">
    //         <Button text="7" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="8" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="9" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="X" className="w-14 h-14 bg-[#f69807] rounded-full" />
    //       </div>
    //       <div className="flex justify-evenly mt-2 text-slate-50 text-lg">
    //         <Button text="4" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="5" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="6" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="-" className="w-14 h-14 bg-[#f69807] rounded-full" />
    //       </div>
    //       <div className="flex justify-evenly mt-2 text-slate-50 text-lg">
    //         <Button text="1" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="2" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="3" className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="+" className="w-14 h-14 bg-[#f69807] rounded-full" />
    //       </div>
    //       <div className="flex justify-evenly mt-2 text-slate-50 text-xl">
    //         <Button
    //           text="0"
    //           className="w-32  bg-[#313131] text-left pl-6 rounded-full"
    //         />
    //         <Button text="." className="w-14 h-14 bg-[#313131] rounded-full" />
    //         <Button text="=" className="w-14 h-14 bg-[#f69807] rounded-full" />
    //       </div>
    //     </div>
    //   </div>
    // </motion.section>

    // Coming soon
    <ComingSoon />
  );
};

export default AppCalculator;
