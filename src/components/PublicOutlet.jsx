import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUsers } from "../features/task/taskSlice";

export default function PublicOutlet() {
  const { users, isLoading, error, isError } = useSelector(
    (state) => state.task
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(isLoading, isError);

  if (users?.length === 0) {
    // Handle loading state, you can display a loading spinner or message.
    return <div>No users available</div>;
  }

  // if (error) {
  //   // Handle error state, you can display an error message.
  //   return <div>Error: {error.message}</div>;
  // }
  let content = null;

  if (users?.length > 0) {
    content = users.some(
      (user) => user.user == "osman goni" && user.pass == "345"
    );
  }
  // if ( users?.length > 0) {
  //   content = users.some(
  //     (user) => user.user === "osman goni" && user.pass === "345"
  //   );
  // }

  console.log(content);
  return content ? <Outlet /> : <Navigate to="/tasks" />;
}
