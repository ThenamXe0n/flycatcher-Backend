const { News } = require("../model/New&blogModel");
exports.postNews = async (req, res) => {
  try {
    const blog = new News(req.body);
    const doc = await blog.save();
    res
      .status(200)
      .json(
        `${doc.blogtype} about ${doc.title} has been posted successfully At ${doc.publishon}`
      );
  } catch (error) {
    res.json(401).json({ Error: error.message });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(401).json({ Error: error.message });
  }
};
