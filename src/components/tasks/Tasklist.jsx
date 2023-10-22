import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../features/task/taskSlice";
import Task from "./Task";

export default function Tasklist() {
  const { tasks, isLoading, isError, error } = useSelector(
    (state) => state.task
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  //what to render
  let content = null;
  if (isLoading) content = <p>Loading....</p>;
  if (!isLoading && isError)
    content = <p className="error">there was an error</p>;
  if (!isLoading && !isError && tasks?.length > 0) {
    content = tasks.map((task) => <Task key={task.id} task={task} />);
  }
  if (!isLoading && !isError && tasks?.length === 0) {
    content = <p>No tasks found!</p>;
  }
  //console.log(content);
  return (
    <>
      <p className="second_heading">Your Tasklist:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
