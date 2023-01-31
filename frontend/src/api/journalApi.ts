import axios from "axios";
import { authStore } from "../store/userStore";

// const accessToken = useAuthStore((state) => state.token);
export const journalApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const journalApiAuth = axios.create({
  baseURL: "http://localhost:5000",
  // headers: {
  //   Authorization: "Bearer " + authStore((state) => state.token),
  // },
});

// journalApiAuth.interceptors.request.use((config: any) => {
//   console.log("it got here");
//   const token = useAuthStore((state) => state.token);
//   console.log("TTTTT", token);
//   config.headers = { Authorization: `Bearer ${token}` };
//   return config;
// });
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

export const getAllBrokers = async () => {
  try {
    const response = await journalApi.get("/api/broker/allbrokers");
    return response.data;
  } catch (error: any) {
    console.log(error);
    console.log("TTTTTTTTTT", error.message);
  }
};

export const addBroker = async (broker: any) => {
  const response = await journalApi.post("/api/broker/create", broker);
  return response.data;
};

export const updateBroker = async (broker: any) => {
  return await journalApi.post(`/api/broker/edit/${broker.id}`, broker);
};

export const deleteBroker = async (id: any) => {
  return await journalApi.post(`/api/broker/delete`, id);
};
