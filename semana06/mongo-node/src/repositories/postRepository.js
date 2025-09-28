import Post from "../models/Post.js";

export const getAllPosts = async () => await Post.find();

export const getPostById = async (id) => await Post.findById(id);

export const createPost = async (data) => {
  const post = new Post({
    title: data.title,
    content: data.content,
    hashtags: data.hashtags ? data.hashtags.split(",").map(tag => tag.trim()) : [],
    imageUrl: data.imageUrl || "",
  });
  return await post.save();
};

export const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(
    id,
    {
      title: data.title,
      content: data.content,
      hashtags: data.hashtags ? data.hashtags.split(",").map(tag => tag.trim()) : [],
      imageUrl: data.imageUrl || "",
      updatedAt: Date.now(),
    },
    { new: true }
  );
};

export const deletePost = async (id) => await Post.findByIdAndDelete(id);
