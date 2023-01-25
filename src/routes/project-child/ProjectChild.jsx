// Apps
import Todo from "../../pages/project/app-to-do/Todo";
import AppZikr from "../../pages/project/app-zikr/AppZikr";
import AppRegisForm from "../../pages/project/app-register-form/AppRegisForm";
import AppExpenseTracker from "../../pages/project/app-expense-tracker/AppExpenseTracker";
import AppCalculator from "../../pages/project/app-calculator/AppCalculator";
import AppVoter from "../../pages/project/app-voter/AppVoter";
import ExpenseV2 from "../../pages/project/app-expense-tracker-v2/ExpenseV2";

// Sandbox
import Sandbox from "../../components/Sandbox";
import ReduxTest from "../../components/ReduxTest";

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
    path: "Sandbox",
    element: <Sandbox />,
  },
];
