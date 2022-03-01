import axios from "axios";

import { QueryClient } from "react-query";

const axiosClient = axios.create({
  baseURL: "https://reqres.in/api",
});

const queryClient = new QueryClient({
  defaultOptions: {},
});

export default axiosClient;
export { queryClient };
