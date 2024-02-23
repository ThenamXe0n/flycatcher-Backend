const { Wishlist } = require("../model/wishlistModel");

exports.addToWishlist = async (req, res) => {
  const userid = req.body.user;
  const wishlist = new Wishlist({ ...req.body, user: userid });
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
    const doc = await Wishlist.find({wish:id });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
