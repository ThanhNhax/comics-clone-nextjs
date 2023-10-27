import axiosConfig from '../utils/configAxios';

class ComincsController {
  getTrendingComincs = async () => {
    try {
      const res = await axiosConfig.get('/trending-comics?page=1');
      return res.data.comics;
    } catch (e) {
      return e;
    }
  };
  getRecommendComics = async () => {
    try {
      const res = await axiosConfig.get('/trending-comics?page=1');
      return res.data.comics;
    } catch (e) {
      return e;
    }
  };
}

export default new ComincsController();
