const { Category } = require("../model/categoryModel");
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const doc = await category.save();
    res.status(200).json(`${doc} has been successfully added to categories`);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.fetchCategory = async (req, res) => {
  try {
    const doc = await Category.find();
    res.status(200).json(doc);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
