const {User} = require("../model/userModel");
const {generateToken,verifyToken} = require("../token/tokenManager");


exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();
    res
      .status(200)
      .json(
        `${doc.name} with username : ${doc.email} has been registered successfully`
      );
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};


exports.userLogin = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      //thois is just temprory we will use strong password auth
      if (!user) {
        res.status(401).json({ messsage: "no such user email found" });
      } else if (
        user.email === req.body.email &&
        user.password === req.body.password
      ) {
        let token = generateToken({ name: user.name, id: user._id });
        res.status(201).json({ status: "success", userdata: {name:user.name,email:user.email,profile:user.profile,contact:user.contact,role:user.role,address:user.address,userId:user._id},token:token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//============ this will check authorization =============>  
exports.checkAuthorization =  async (req, res, next) => {
  try {
    let result = await verifyToken(req);
    if (result.status) {
      console.log("working fine")
      next();
    } else {
      res.json(result.msg);
    }
  } catch (error) {
    console.log(error.message);
  }
}

//reset project//
exports.passwordReset = async(req,res)=>{
  const email = req.body.email;
  try{

  }catch(err){
    res.status(401).json({error:err.message})
  }
}
//===============authorization end================//