import React, { useState } from "react";

function Expense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, e.g., send the data to a server or perform some action.
    console.log("Title:", title);
    console.log("Amount:", amount);
    console.log("Date:", date);

    // Reset the form
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Expense Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default Expense;
