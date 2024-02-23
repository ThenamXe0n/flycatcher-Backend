const { Brand } = require("../model/brandModel");

exports.createBrands = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    const doc = await brand.save();
    res.status(200).json(`${doc.brand} has been added to list `);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};

exports.fetchBrands = async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json(brand);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};
