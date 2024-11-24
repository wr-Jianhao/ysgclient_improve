import axios from "axios";

const apiBaseUrl =
  import.meta.env.MODE === "production" ? "/" : "http://localhost:1333";
// 创建Axios实例
const apiClient = axios.create({
  baseURL: apiBaseUrl, // 根据环境变量获取API地址
  headers: {
    // 'Content-Type': 'application/json',
    "Content-Type": "application/x-www-form-urlencoded;charaset=UTF-8",
    Accept: "application/json",
  },
  timeout: 5000,
  withCredentials: true, // 允许携带 Cookie
});

// 请求拦截器
apiClient.interceptors.request.use(async (request) => {
  console.log("请求信息:", request);
  return request;
});

apiClient.interceptors.response.use(
  async (response) => {
    console.log("响应数据:", response);
    return response;
  },
  (error) => {
    console.error("响应错误:", error);
    return Promise.reject(error);
  },
);

export default apiClient;
