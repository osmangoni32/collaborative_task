import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="form">
    <h3>Add new Task</h3>

    <div className="form-group">
        <label>title</label>
        <input
            type="text"
            name="transaction_name"
            placeholder="title"
        />
    </div>

    <div className="form-group radio">
        <label for="transaction_type">Priority</label>
        <div className="radio_group">
            <input
                type="radio"
                value="high"
                name="transaction_type"
                checked
            />
            <label for="transaction_type">high</label>
        </div>
        <div className="radio_group">
            <input
                type="radio"
                value="expense"
                name="transaction_type"
                placeholder="Expense"
            />
            <label for="transaction_type">low</label>
        </div>
    </div>

    <div className="form-group">
        <label >description</label>
        <input
            type="text"
            placeholder=""
            name="transaction_amount"
        />
    </div>

    <button className="btn">Add Task</button>

    <button className="btn cancel_edit">filter</button>
</div>
  );
}
