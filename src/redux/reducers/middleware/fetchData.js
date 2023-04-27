import { createAsyncThunk } from "@reduxjs/toolkit";

function getData() {
  let data = [];
  localStorage.getItem("cad_cliente")
    ? (data = JSON.parse(localStorage.getItem("cad_cliente")))
    : (data = []);
    return data;
}

export default getData;


export const fetchData = createAsyncThunk(
    "emailSlice/fetchData",
    async () => {
        const response = await getData();
        return response;
    }
);

