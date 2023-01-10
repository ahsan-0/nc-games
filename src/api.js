import axios from "axios";

export const getReviews = () => {
  return axios.get("https://nc-games-f38h.onrender.com/api/reviews");
};
