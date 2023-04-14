import axios from "axios";
import { adminAPI,userAPI } from "./Constant.js";
const axiosAdmin = axios.create({
    baseURL: adminAPI,
});
const Axios = axios.create({
    baseURL: userAPI,
});
export {axiosAdmin,Axios};
