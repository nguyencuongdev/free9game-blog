import { requestPaths } from '@/configs';
import { axiosInstance } from '@/libs/axios';

export const getReviewsGameListService = async (pageIndex: number, pageSize: number) => {
  try {
    const response = await axiosInstance.get(requestPaths.reviewGames, {
      params: {
        pageIndex,
        pageSize,
      },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};
