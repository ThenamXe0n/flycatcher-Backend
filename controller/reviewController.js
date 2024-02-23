const { Review } = require("../model/reviewModel");

exports.RateProduct = async (req, res) => {
  try {
    const review = new Review(req.body);
    const doc = await review.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.fetchProductRating = async (req, res) => {
  const id = req.query.product;
  try {
    const review = await Review.find({ product: id });
    res.status(200).json(review);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};
