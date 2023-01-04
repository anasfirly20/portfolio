import { TiDelete } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";

const AppExpenseTrackerHistory = ({
  text,
  amount,
  className,
  onDelete,
  id,
}) => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div
          className={`${className} relative flex justify-between bg-white shadow-sm shadow-black p-1 border-r-4 rounded-sm group`}
        >
          <h2>{text}</h2>
          <p>{amount}</p>
          {/* <p
            className="absolute -top-2 -left-2 cursor-pointer"
            onClick={() => onDelete(id)}
          > */}
          <AiOutlineDelete
            className="w-8 h-8 hidden group-hover:block absolute -bottom-[-0.05rem] -left-8 cursor-pointer"
            onClick={() => {
              onDelete(id);
            }}
          />
          {/* </p> */}
        </div>
      </div>
    </>
  );
};

export default AppExpenseTrackerHistory;
