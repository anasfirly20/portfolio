// Apps
import Todo from "../../components/app-to-do/Todo";
import AppZikr from "../../components/app-zikr/AppZikr";
import AppRegisForm from "../../components/app-register-form/AppRegisForm";
import AppExpenseTracker from "../../components/app-expense-tracker/AppExpenseTracker";
import AppCalculator from "../../components/app-calculator/AppCalculator";
import AppVoter from "../../components/app-voter/AppVoter";
import ReduxTest from "../../components/ReduxTest";
import ExpenseV2 from "../../components/app-expense-tracker-v2/ExpenseV2";

// experiment
import Experiment from "../../components/Experiment";

// Route for child of projects (applications)
export const ProjectChild = [
  {
    id: 1,
    path: "zikr-app",
    element: <AppZikr />,
  },
  {
    id: 2,
    path: "registration-form",
    element: <AppRegisForm />,
  },
  {
    id: 3,
    path: "expense-tracker",
    element: <AppExpenseTracker />,
  },
  {
    id: 4,
    path: "to-do-app",
    element: <Todo />,
  },
  {
    id: 5,
    path: "calculator-app",
    element: <AppCalculator />,
  },
  {
    id: 6,
    path: "voter-app",
    element: <AppVoter />,
  },
  {
    id: 7,
    path: "expense-tracker-v2",
    element: <ExpenseV2 />,
  },
  {
    id: 8,
    path: "redux-test",
    element: <ReduxTest />,
  },
  {
    id: 9,
    path: "experiment",
    element: <Experiment />,
  },
];
