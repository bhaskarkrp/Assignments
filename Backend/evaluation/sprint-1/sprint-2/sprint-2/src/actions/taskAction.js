import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("requestTasks", async () => {
  const response = await axios.get("http://localhost:8000/tasks/");
  // console.log("response", response);
  return response.data;
});

export const getTask = createAsyncThunk("requestTask", async (id) => {
  const response = await axios.get(`http://localhost:8000/tasks/${id}`);

  return response.data;
});

// export const patchTask = createAsyncThunk("patchTask", async (id, body) => {
//   const response = await axios.patch(`http://localhost:8000/tasks/${id}`);
//   return response.data;
// });
