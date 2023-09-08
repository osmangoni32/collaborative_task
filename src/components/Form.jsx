import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../features/task/taskSlice";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, error, editing } = useSelector(
    (state) => state.task
  );
  console.log(editing);
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTask({ title, description, priority, status }));
    // reset();
  };

  return (
    <div className="form">
      <h3>Add new Task</h3>
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label>title</label>
          <input
            required
            type="text"
            name="task_title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>description</label>
          <input
            type="text"
            placeholder=""
            name="task_description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Priority</label>
          <div className="radio_group">
            <input
              type="radio"
              value="high"
              name="priority"
              checked={priority === "high"}
              onChange={(e) => setPriority("high")}
            />
            <label>high</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="low"
              name="priority"
              checked={priority === "low"}
              onChange={(e) => setPriority("low")}
            />
            <label>low</label>
          </div>
        </div>

        <div className="form-group radio">
          <label>Task status</label>
          <div className="radio_group2">
            <input
              type="radio"
              value="completed"
              name="status"
              checked={status === "completed"}
              onChange={(e) => setStatus("completed")}
            />
            <label>done</label>
          </div>
          <div className="radio_group2">
            <input
              type="radio"
              value="incomplete"
              name="status"
              checked={status === "incomplete"}
              onChange={(e) => setStatus("incomplete")}
            />
            <label>pending</label>
          </div>
        </div>

        <button className="btn">Add Task</button>
      </form>
      <button className="btn cancel_edit">filter</button>
    </div>
  );
}
