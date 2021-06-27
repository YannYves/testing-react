import moment from "moment";
import expenses from "../../reducers/expenses";

const expensesData = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: moment(0).valueOf(),
    endDate: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 19500,
    createdAt: moment(0).subtract(4, "days").valueOf(),
    endDate: moment(0).subtract(3, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    createdAt: moment(0).add(5, "days").valueOf(),
    amount: 4500,
    endDate: undefined,
  },
];

export { expensesData };
