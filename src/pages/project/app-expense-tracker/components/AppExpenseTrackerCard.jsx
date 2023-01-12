const AppExpenseTrackerCard = ({ type, amount, className }) => {
  return (
    <div className="my-auto flex flex-col items-center">
      <h3 className="text-sm font-bold uppercase">{type}</h3>
      <p className={`${className} text-xl`}>${amount}</p>
    </div>
  );
};

export default AppExpenseTrackerCard;
