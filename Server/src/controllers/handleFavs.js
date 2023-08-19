let myFavourites = [];

const postFav = (req, res) => {
  myFavourites.push(req.body);
  res.json(myFavourites);
};

const deleteFav = (req, res) => {
  const { id } = res.params;
  const filtered = myFavourites.filter((fav) => fav.id !== id);
  myFavourites = filtered;
  res.json(myFavourites);
};

module.exports = { postFav, deleteFav };
