import postRepository from "../repositories/postRepository.js";
import userRepository from "../repositories/userRepository.js";

class PostService {
    async createPost(userId, postData) {
        const user = await userRepository.findById(userId);
        if (!user) throw new Error("Usuario no encontrado");

        // Convertir hashtags separados por comas en array
        if (postData.hashtags) {
            postData.hashtags = postData.hashtags.split(",").map(tag => tag.trim());
        }

        return await postRepository.create({ ...postData, user: user._id });
    }

    async getPosts() {
        return await postRepository.findAll();
    }

    async getPostsByUser(userId) {
        return await postRepository.findByUser(userId);
    }
}

export default new PostService();
