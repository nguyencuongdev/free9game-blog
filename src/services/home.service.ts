import { axiosInstance } from '../libs/axios';
import { requestPaths } from '../configs';

export const getContentHomePageSerive = async () => {
  try {
    const response = await axiosInstance.get(requestPaths.home);
    return response.data;
  } catch (e) {
    throw e;
  }
};
