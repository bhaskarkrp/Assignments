import { createSlice } from "@reduxjs/toolkit";
import { getTasks, getTask } from "../actions/taskAction";

const taskReducers = createSlice({
  name: "tasks",
  initialState: {
    tasksData: [],
    taskDetail: {},
    taskContainer: [],
    loader: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loader = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loader = false;
        // console.log(action.payload, state);
        state.tasksData = [...action.payload];
        state.taskContainer = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(getTask.pending, (state) => {
        state.loader = true;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loader = false;
        state.taskDetail = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      });
  },
});

export const { addTask, filteredTasks } = taskReducers.actions;
export default taskReducers.reducer;
