import React from "react";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";

export default function Task() {
  return (
    <li className="transaction income">
      <p>title</p>
      <div className="right">
        <p>priority</p>
        <p>task status</p>
        <button className="link">
          <img alt="edit" className="icon" src={editImage} />
        </button>
        <button className="link">
          <img alt="delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
}
