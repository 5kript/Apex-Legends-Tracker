import Axios from 'axios';

const apexLogic = {
  async fetchProfile(platform, tag) {
    try {
      const res = await Axios.get(
        `http://localhost:80/api/v1/profile/${platform}/${tag}`
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return err;
    }
  }
};

export default apexLogic;
