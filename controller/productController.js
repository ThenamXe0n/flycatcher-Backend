const { Product } = require("../model/productModel");

exports.createProducts = async (req, res) => {
  try {
    console.log(req.body)
    const product = new Product(req.body);
    const doc = await product.save();
    res.status(200).json(`success : new product ${doc.product} has been added`);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.fetchProducts = async (req, res) => {
  let condition = {};

  let query = Product.find(condition);
  let totalProductsQuery = Product.find(condition);
//category filter 
  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({
      category: req.query.category,
    });
  }
//brand filter
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({
      brand: req.query.brand,
    });
  }
  //sorting
  if (req.query._sort && req.query._order) {
    query = query.sort({[req.query._sort]:req.query._order });
  }
//total docs 
  const totalDocs = await totalProductsQuery.count().exec();
  console.log({ totalDocs });

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json({product:docs,totalProducts:totalDocs});
    console.log();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.fetchProductsById = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findById(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.fetchProductByCategory = async (req, res) => {
  const category = req.query.category;
  try {
    const doc = await Product.find({ category: category });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
