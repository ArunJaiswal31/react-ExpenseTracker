import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Location from "./Location";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("asgdjhgasdg");

  const [title, setTitle] = useState(props.title);

  const clickHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.newtitle.value);
  };

  const locationOfExpenditure = "Example Location";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <Location locationOfExpenditure={locationOfExpenditure} />
      <form onSubmit={clickHandler}>
        <input type="text"  name="newtitle" />
        <button type="submit">Change Title</button>
      </form>
    </Card>
  );
};

export default ExpenseItem;
