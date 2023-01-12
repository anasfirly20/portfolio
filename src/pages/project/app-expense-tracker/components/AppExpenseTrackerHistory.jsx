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
          className={`${className} group relative flex justify-between rounded-sm border-r-4 bg-white p-1 shadow-sm shadow-black`}
        >
          <h2>{text}</h2>
          <p>{amount}</p>
          {/* <p
            className="absolute -top-2 -left-2 cursor-pointer"
            onClick={() => onDelete(id)}
          > */}
          <AiOutlineDelete
            className="absolute -bottom-[-0.05rem] -left-8 hidden h-8 w-8 cursor-pointer group-hover:block"
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
