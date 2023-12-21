import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
  const ExpenseItems = props.item.map((item) => (
    <ExpenseItem
      date={item.date}
      title={item.title}
      amount={item.amount}
      key={item.id}
    />
  ));

  return <Card className="expenses">{ExpenseItems}</Card>;
};
export default Expenses;
