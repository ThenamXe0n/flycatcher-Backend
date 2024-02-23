const { Cart } = require("../model/cartModel");

exports.fetchAllCartItems = async (req, res) => {
  try {
    const doc = await Cart.find().populate("product");
    //   res.status(200).json(doc);
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.fetchCartByUserId = async (req, res) => {
  const id = req.query.user;
  try {
    const doc = await Cart.find({ user: id }).populate("product");
    //   res.status(200).json(doc);
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addToCart = async (req, res) => {
  const userid = req.body.user;
  const cart = new Cart({ ...req.body, user: userid });
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(200).json(`${result.product.product} has been added to cart`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  const id = req.query.user;
  const productId = req.query.product;
  try {
    console.log(req.query);
    const doc = await Cart.findOneAndDelete({
      user: id,
      product: productId,
    }).populate("product");
    res.status(200).json(`${doc}`);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};

exports.clearUserCart = async (req, res) => {
  const id = req.query.user;
  try {
    const cart = await Cart.find({ user: id }).deleteMany();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};


