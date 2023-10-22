import axios from "../../utils/axios";

export const getTasks = async () => {
  const response = await axios.get("/tasks");
  return response.data;
};
export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};
export const addTask = async (data) => {
  const response = await axios.post("/tasks", data);
  return response.data;
};
export const editTask = async (id, data) => {
  const response = await axios.put(`/tasks/${id}`, data);
  return response.data;
};
export const deleteTask = async (id) => {
  const response = await axios.delete(`/tasks/${id}`);
  return response.data;
};
//added
