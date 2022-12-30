const AppExpenseTrackerCard = ({ type, amount, className }) => {
  return (
    <div className="flex flex-col items-center my-auto">
      <h3 className="font-bold uppercase text-sm">{type}</h3>
      <p className={`${className} text-xl`}>${amount}</p>
    </div>
  );
};

export default AppExpenseTrackerCard;
