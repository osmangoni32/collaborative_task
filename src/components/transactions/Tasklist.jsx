import React from "react";
import Task from "./Task";

export default function Tasklist() {
  //what to render

  return (
    <>
      <p className="second_heading">Your Tasklist:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          <Task />
        </ul>
      </div>
    </>
  );
}
