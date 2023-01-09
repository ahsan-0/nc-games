function getReviews() {
  return fetch("https://nc-games-f38h.onrender.com/api/reviews").then((response) => response.json());
}

module.exports = {getReviews}