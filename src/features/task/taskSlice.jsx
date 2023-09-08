import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, editTask, getTasks } from "./taskAPI";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
  erroe: "",
  editing: {},
};

//async thunks
export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const tasks = await getTasks();
  return tasks;
});
export const createTask = createAsyncThunk("task/createTask", async (data) => {
  const task = await addTask(data);
  return task;
});
export const changeTask = createAsyncThunk(
  "task/changeTask",
  async ({ id, data }) => {
    const task = await editTask(id, data);
    return task;
  }
);
export const removeTask = createAsyncThunk("task/removeTask", async (id) => {
  const task = await deleteTask(id);
  return task;
});
//create slice
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state, action) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.tasks = [];
      })
      .addCase(createTask.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeTask.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTask.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const indexToUpdate = state.tasks.findIndex(
          (t) => t.id === action.payload.id
        );

        state.tasks[indexToUpdate] = action.payload;
      })
      .addCase(changeTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeTask.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        state.tasks = state.tasks.filter((t) => t.id !== action.meta.arg);
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default taskSlice.reducer;
export const { editActive, editInActive } = taskSlice.actions;
