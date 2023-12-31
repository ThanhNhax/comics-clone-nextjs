import axiosConfig from '../utils/configAxios';

class ComincsController {
  getRecentUpdate = async (page) => {
    try {
      const res = await axiosConfig.get(`/recent-update-comics?page=${page}`);
      return res.data;
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
  getTopComics = async (select, page, status) => {
    try {
      const res = await axiosConfig.get(
        `/top/${select}?page=${page}&status=${status}`
      );
      return res.data.comics;
    } catch (e) {
      return e;
    }
  };
  getComicsById = async (id) => {
    try {
      const res = await axiosConfig.get(`/comics/${id}`);
      return res.data;
    } catch (e) {
      return e;
    }
  };
  getComicsChaptersById = async (comicsId, chapterId) => {
    try {
      const res = await axiosConfig.get(
        `/comics/${comicsId}/chapters/${chapterId}`
      );
      return res.data;
    } catch (e) {
      return e;
    }
  };
}

export default new ComincsController();
