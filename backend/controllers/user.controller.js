const User = require("../models/user.model.js");
const Notification = require("../models/notification.model.js");
const bcrypt = require('bcryptjs');
const getUserProfile = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUserProfile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const followUnfollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    if (id === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: "You can't follow/unfollow yourself" });
    }
    if (!userToModify || !currentUser) {
      return res.status(400).json({ error: "User not found!!!" });
    }
    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      // unfollow the user
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      res.status(200).json({ message: "User unfollowed successfully!!!" });
    } else {
      // follow the user
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      // sending notification to the user ()mtlab notification send krrne ke lia notification models ka logi lagga rahe han
      const newNotification = new Notification({
        type: "follow",
        from: req.user._id,
        to: userToModify._id,
      });
      // notication database mai save hoo raha haa
      await newNotification.save();
      res.status(200).json({ message: "User followed successfully!!!" });
    }
  } catch (error) {
    console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
const getSuggestedUsers = async (req, res) => {
  try {
    const userId = req.user._id;

    const userFollowedByMe = await User.findById(userId).select("following");
    const users = await User.aggregate([
      {
        $match: {
          _id: { $ne: userId },
        },
      },
      { $sample: { size: 10 } },
    ]);
    const filterUsers = users.filter(
      (user) => !userFollowedByMe.following.includes(user._id)
    );
    const suggestedUsers = filterUsers.slice(0, 4);

    suggestedUsers.forEach((user) => (user.password = null));
    res.status(200).json(suggestedUsers);
  } catch (error) {
    console.log("Error in getSuggestionUsers: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
    const {name, email, username, currentPassword, newPassword, bio, link} = req.body;
    let {profileImg, coverImg} = req.body;
    const userId =req.user._id;
  try {
    const user =await User.findById(userId);
    if(!user) return res.status(404).json({message:"User not found!!!"});
    if((!newPassword && currentPassword) || (!currentPassword && newPassword)){
        return res.status(404).json({error:"Please provide both current password and new password"})
    }
    if(currentPassword && newPassword){
        const isMatch =await bcrypt.compare(currentPassword, user.password);
        if(!isMatch) return res.status(400).json({error:"Current Password is incorrect"});
        const salt = await bcrypt.genSalt(10);
        user.password =await bcrypt.hash(newPassword, salt);
    }
    if(profileImg){

    }
    if(coverImg){
        
    }
  } catch (error) {
    console.log("Error in getSuggestionUsers: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getUserProfile,
  getSuggestedUsers,
  followUnfollowUser,
  updateUser,
};
