import React from "react";
import "./App.css";

import Expenses from "./components/Expenses/Expenses";
const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "school Fee",
      amount: 250,
      date: new Date(2012, 5, 12),
    },

    {
      id: "e2",
      title: "Books",
      amount: 230,
      date: new Date(2023, 2, 22),
    },

    {
      id: "e3",
      title: "House Rent",
      amount: 3500,
      date: new Date(2022, 1, 12),
    },

    {
      id: "e4",
      title: "Gym",
      amount: 5550,
      date: new Date(2012, 5, 12),
    },
    {
      id: "e5",
      title: "Office",
      amount: 5558,
      date: new Date(2012, 5, 12),
    }
  ];
  return (
    <div>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
