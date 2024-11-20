const User = require("../model/User");
const Counter = require("../model/Counter");

exports.createUser = async (req, res) => {
  try {
    const { name, email, title, department, role } = req.body;

    // Validate that all required fields are provided
    if (!name || !email || !title || !department || !role) {
      return res.status(400).json({
        success: false,
        message: "PLEASE ENTER ALL DETAILS",
      });
    }

    let counter = await Counter.findOne({});
    if (!counter) {
      counter = await Counter.create({
        userIdCounter: 1,
      });
    }
    const unq_id = counter.userIdCounter;
    // Create the user
    const user = await User.create({
      unq_id,
      name,
      email,
      title,
      department,
      role,
      image: `https://api.dicebear.com/9.x/initials/svg?seed=${name}`,
    });
    counter.userIdCounter += 1;
    await counter.save();
    return res.status(200).json({
      success: true,
      message: "USER CREATED",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};
