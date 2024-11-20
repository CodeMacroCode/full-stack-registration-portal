const User = require("../model/User");
const model = require("../model/User");

exports.getAllUser = async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};
