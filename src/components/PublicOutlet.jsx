import React from "react";
import { useSelector } from "react-redux";

export default function PublicOutlet() {
  const users = useSelector((state) => state.user);
  console.log(users);
  return <div>PublicOutlet</div>;
}
