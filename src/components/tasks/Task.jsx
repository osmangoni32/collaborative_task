import React from "react";
import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { editActive, removeTask } from "../../features/task/taskSlice";

export default function Task({ task }) {
  const { title, description, priority, status, id } = task || {};
  
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editActive(task));
  };
  const handleDelete = () => {
    dispatch(removeTask(id));
  };
  return (
    <li className={`task ${priority}`}>
      <p>{title}</p>
      <div className="right">
        <p>{priority}</p>
        <p>{status}</p>
        <button className="link" onClick={handleEdit}>
          <img alt="edit" className="icon" src={editImage} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img alt="delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
}
