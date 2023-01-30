import axios from "axios";

const journalApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const logUser = async (userInfo: object) => {
  try {
    const response = await journalApi.post("/api/users/login", userInfo);
    // console.log("Log in successful", response);
    return response;
  } catch (error: any) {
    // console.log(error.response.data);
    return error.response.data;
  }
};

export const registerUser = async (userInfo: object) => {
  try {
    const response = await journalApi.post("/api/users/signup", userInfo);
    // console.log("Log in successful", response);
  } catch (error: any) {
    // console.log(error.response.data);
    return error.response.data;
  }
};

export default journalApi;
