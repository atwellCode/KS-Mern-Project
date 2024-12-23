const Post = require("../models/post.model");
const User = require("../models/user.model");
const Notification = require("../models/notification.model");
const cloudinary = require("cloudinary").v2;

const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    let { img } = req.body;
    const userId = req.user._id || req.body._id; // Try both sources

    // Validate the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!!!" });
    }

    // Validate post content
    if (!text && !img) {
      return res.status(400).json({ error: "Post must have Text or Image!!!" });
    }

    // Upload image to Cloudinary if present
    if (img) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(img, {
          folder: "posts", // Optional: Organize uploads in a folder
        });
        img = uploadResponse.secure_url;
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error.message);
        return res.status(500).json({ error: "Image upload failed" });
      }
    }

    const newPost = new Post({
      user: userId,
      text,
      img,
    });
    await newPost.save();

    res.status(201).json({ post: newPost });
  } catch (error) {
    console.error("Error in createPost:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const likeUnlikePost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: postId } = req.params;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found!!!" });
    }

    const userLikePost = post.likes.includes(userId);
    if (userLikePost) {
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      await User.updateOne({ _id: userId }, { $pull: { likedPosts: postId } });
      res.status(200).json({ message: "Post unliked successfully!!!" });
    } else {
      post.likes.push(userId);
      await User.updateOne({ _id: userId }, { $push: { likedPosts: postId } });
      await post.save();

      const notification = new Notification({
        from: userId,
        to: post.user,
        type: "like",
      });
      await notification.save();

      res.status(200).json({ message: "Post like Successsfully!!!" });
    }
  } catch (error) {
    console.error("Error in likeUnlikePost:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const commentOnPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id || req.body._id;

    if (!text) {
      return res.status(400).json({ error: "The field is required!!!" });
    }
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ error: "Post not found!!!" });
    }
    const comment = { user: userId, text };
    post.comments.push(comment);
    await post.save();

    res.status(200).json({ post });
  } catch (error) {
    console.error("Error in commentOnPost:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found!!!" });
    }
    if (post.user.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ error: "Tou are not the owner of this post!!!" });
    }
    if (post.img) {
      const imgId = post.img.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted Successfully!!!" });
  } catch (error) {
    console.error("Error in deletePost:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });
    if (posts.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in deletePost:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getLikedPost = async (req, res) => {
  const { id: userId } = req.params; // Extract the 'id' field from 'req.params'
  try {
    const user = await User.findById(userId); // Pass the extracted 'userId' here
    if (!user) {
      return res.status(404).json({ error: "User not found!!!" });
    }

    const likedPosts = await Post.find({ _id: { $in: user.likedPosts } })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password", // Fixed typo "-assword"
      });

    res.status(200).json(likedPosts);
  } catch (error) {
    console.error("Error in getLikedPost:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFollowingPost = async (req, res) => {
    try {
      // Get authenticated user's ID from req.user (ensure middleware is implemented correctly)
      const userId = req.user._id;
  
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found!!!" });
      }
  
      // Check if the user is following anyone
      const { following } = user;
      if (!following || following.length === 0) {
        return res.status(200).json({ feedPosts: [] }); // No posts if not following anyone
      }
  
      // Fetch posts from users the authenticated user is following
      const feedPosts = await Post.find({ user: { $in: following } })
        .sort({ createdAt: -1 }) // Sort posts by creation date (newest first)
        .populate({
          path: "user",
          select: "-password", // Exclude password field from populated user data
        })
        .populate({
          path: "comments.user",
          select: "-password", // Exclude password field from populated comment user data
        });
  
      // Return the posts
      res.status(200).json({ feedPosts });
    } catch (error) {
      console.error("Error in getFollowingPost:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
const getUserPost = async (req, res) => {
    try {
      const { username } = req.params;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found!!!" });
      }
  
      const posts = await Post.find({ user: user._id })
        .sort({ createdAt: -1 }) 
        .populate({
          path: "user",
          select: "-password",
        })
        .populate({
          path: "comments.user",
          select: "-password",
        });
  
      res.status(200).json({ posts });
    } catch (error) {
      console.error("Error in getUserPost:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
module.exports = {
  createPost,
  likeUnlikePost,
  commentOnPost,
  deletePost,
  getAllPost,
  getLikedPost,
  getFollowingPost,
  getUserPost
};
