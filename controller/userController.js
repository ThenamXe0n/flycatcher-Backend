const { User } = require("../model/userModel");
const { generateToken } = require("../token/tokenManager");

exports.fetchUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      userdata: {
        name: user.name,
        email: user.email,
        contact: user.contact,
        role: user.role,
        profile:user.profile,
        address: user.address,
        userId: user._id,
      },
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  
  try {
    if(!user){
      res.status(401).json("user not found")
      return;
    }
    const newUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exports.loginUser = async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     //thois is just temprory we will use strong password auth
//     if (!user) {
//       res.status(401).json({ messsage: "no such user email found" });
//     } else if (
//       user.email === req.body.email &&
//       user.password === req.body.password
//     ) {
//       let token = generateToken({ name: user.name, id: user._id });
//       res.status(201).json({ status: "success", userdata: user,token:token });
//     } else {
//       res.status(401).json({ message: "invalid credentials" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
