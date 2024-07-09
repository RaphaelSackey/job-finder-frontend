import axios from "axios";

export default function Axios(){
    const axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:5000",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return axiosInstance
}
