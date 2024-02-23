const { Order } = require("../model/orderModel");

exports.addOrders = async (req, res) => {
  try {
    const order = new Order(req.body);
    const doc = await order.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.fetchOrderByUserId = async(req,res)=>{
const id = req.query.user
    try{
        const doc = await Order.find({ user: id }).populate("user");
        res.status(200).json(doc)
    }catch(error){
        res.status(401).json({error:error.message})
    }
}
