import axios from "axios";
import { authStore } from "../store/userStore";
import { toast } from "react-toastify";

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

export const getAllData = async (dataType: string) => {
  try {
    const response = await journalApi.get(`/api/${dataType}/all${dataType}s`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const addBroker = async (broker: any) => {
  try {
    const response = await journalApi.post("/api/broker/create", broker);
    toast.success("Broker successfully added");
    // return response.data;
  } catch (error: any) {
    console.log("error mayne", error.response.data);
    if (error.response.data.error) {
      for (error of error.response.data.error) {
        toast.error(error);
      }
    } else {
      toast.error(error.response.data);
    }
  }
};

export const addNewData = async (obj: any) => {
  const { dataType, dataInfo } = obj;
  console.log(dataType, dataInfo);
  try {
    const response = await journalApi.post(`/api/${dataType}/create`, dataInfo);
    toast.success(`${dataType} successfully added`);
    // return response.data;
  } catch (error: any) {
    console.log("error mayne", error.response.data);
    if (error.response.data.error) {
      for (error of error.response.data.error) {
        toast.error(error);
      }
    } else {
      toast.error(error.response.data);
    }
  }
};

export const updateBroker = async (broker: any) => {
  return await journalApi.post(`/api/broker/edit/${broker.id}`, broker);
};

export const deleteData = async (obj: any) => {
  console.log(obj);
  const { dataType, dataId } = obj;
  return await journalApi.delete(`/api/${dataType}/delete/${dataId}`);
};
