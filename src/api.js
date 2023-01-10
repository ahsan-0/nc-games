import axios from "axios";

export const getReviews = () => {
  return axios.get("https://nc-games-f38h.onrender.com/api/reviews");
};

export const getSingleReview = (id) => {
  return axios.get(`https://nc-games-f38h.onrender.com/api/reviews/${id}`);
}

export const getComments = (id) => {
  return axios.get(`https://nc-games-f38h.onrender.com/api/reviews/${id}/comments`);
}