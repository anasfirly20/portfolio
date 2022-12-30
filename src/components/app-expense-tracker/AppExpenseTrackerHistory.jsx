const AppExpenseTrackerHistory = ({
  text,
  amount,
  className,
  onDelete,
  id,
}) => {
  return (
    <>
      <div className="flex flex-row gap-2 cursor-pointer">
        <div
          className={`${className} flex justify-between bg-white shadow-sm shadow-black p-1 border-r-4 rounded-sm`}
          onClick={() => onDelete(id)}
        >
          <h2>{text}</h2>
          <p>{amount}</p>
        </div>
      </div>
    </>
  );
};

export default AppExpenseTrackerHistory;
