import moment from "moment";
import expenseReducer from "../../reducers/expenses";
import { expensesData } from "../fixtures/expenses";

test("should remove expense by ID", () => {
  const action = { type: "REMOVE_EXPENSE", id: expensesData[0].id };
  const state = expenseReducer(expensesData, action);
  expect(state).toEqual([expensesData[1], expensesData[2]]);
});

test("should not remove expense if ID not found", () => {
  const action = { type: "REMOVE_EXPENSE", id: "4" };
  const state = expenseReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Bread",
    note: "",
    amount: 1,
    createdAt: moment(0).valueOf(),
    endDate: moment(0).subtract(4, "days").valueOf(),
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expenseReducer(expensesData, action);
  expect(state).toEqual([...expensesData, expense]);
});

test("should edit an expense", () => {
  const description = "and edited description";
  const action = {
    type: "EDIT_EXPENSE",
    id: expensesData[2].id,
    updates: {
      description,
    },
  };
  const state = expenseReducer(expensesData, action);
  expect(state[2].description).toEqual(description);
});

test("should not edit an expense if id not found", () => {
  const description = "and edited description";
  const action = {
    type: "EDIT_EXPENSE",
    id: "10",
    updates: {
      description,
    },
  };
  const state = expenseReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});
