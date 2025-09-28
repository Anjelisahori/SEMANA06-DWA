import * as postRepository from "../repositories/postRepository.js";

export const listPosts = async () => await postRepository.getAllPosts();

export const getPost = async (id) => await postRepository.getPostById(id);

export const addPost = async (data) => await postRepository.createPost(data);

export const editPost = async (id, data) => await postRepository.updatePost(id, data);

export const removePost = async (id) => await postRepository.deletePost(id);
