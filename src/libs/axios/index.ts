import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  async req => {
    const channelKey = process.env.NEXT_PUBLIC_CHANNEL_KEY ?? '';

    req.headers.channel = channelKey;
    return req;
  },
  error => Promise.reject(error),
);

// axiosInstance.interceptors.response.use((response: AxiosResponse) => {
//   return response.data;
// });
