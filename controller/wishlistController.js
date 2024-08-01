const { Wishlist } = require("../model/wishlistModel");

exports.addToWishlist = async (req, res) => {
  const { user, product } = req.body;
  const alreadyExist = await Wishlist.find({ user, product });
  console.log(alreadyExist)
  console.log(alreadyExist.length < 0)

  //checking for already existing item in user wishlist
  if (alreadyExist.length) {
    res.status(400).json("Item already existed in wishlist");
    return;
  }

  const wishlist = await Wishlist.create({ user, product });
  try {
    const doc = await wishlist.save();
    res.status(200).json(`Item (itemId:${doc.product}) added to wish list`);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};

exports.getUserWishlistItem = async (req, res) => {
  const userId = req.query.user;
  try {
    const wishlist = await Wishlist.find({ user: userId }).populate("product");
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};

exports.removeWishlistItem = async (req, res) => {
  const id = req.body.id;
  try {
    const doc = await Wishlist.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

exports.updateWishlistItem = async (req, res) => {
  const id = req.query.id;
  try {
    const doc = await Wishlist.find({ wish: id });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
