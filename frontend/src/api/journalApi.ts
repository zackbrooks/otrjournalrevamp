import axios from "axios";
import { useAuthStore } from "../store/userStore";
import { toast } from "react-toastify";

export const journalApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  // headers: {
  //   Authorization: "Bearer " + authStore((state) => state.token),
  // },
});

export const journalApiAuth = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  // headers: {
  //   Authorization: "Bearer " + authStore.getState().token,
  // },
});

journalApiAuth.interceptors.request.use((config: any) => {
  const token = useAuthStore.getState().token;
  config.headers = { Authorization: `Bearer ${token}` };
  return config;
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

export const getAllData = async (dataType: string) => {
  try {
    // const response = await request({
    //   url: `/api/${dataType}/all${dataType}s`,
    //   method: "get",
    // });
    const response = await journalApiAuth.get(
      `/api/${dataType}/all${dataType}s`
    );
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data);
  }
};

export const addNewData = async (obj: any) => {
  const { dataType, dataInfo } = obj;
  console.log(dataType, dataInfo);
  try {
    const response = await journalApiAuth.post(
      `/api/${dataType}/create`,
      dataInfo
    );
    toast.success(`${dataType} successfully added`);
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

export const editData = async (obj: any) => {
  console.log("This would be a update call");
  const { dataType, dataInfo, dataId } = obj;
  console.log("EEEDDDIIITTT", dataType, dataInfo);
  try {
    const response = await journalApi.post(
      `/api/${dataType}/edit/${dataId}`,
      dataInfo
    );
    toast.success(`${dataType} successfully updated`);
  } catch (error: any) {
    console.log("error mayne on Edit", error.response.data);
    if (error.response.data.error) {
      for (error of error.response.data.error) {
        toast.error(error);
      }
    } else {
      toast.error(error.response.data);
    }
  }
};

export const deleteData = async (obj: any) => {
  const { dataType, dataId } = obj;
  return await journalApi.delete(`/api/${dataType}/delete/${dataId}`);
};
