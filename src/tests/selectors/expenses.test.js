import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses = [
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

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by text startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by text endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
