import postService from "../services/postService.js";
import postRepository from "../repositories/postRepository.js";
import userRepository from "../repositories/userRepository.js"; // importamos el repositorio de usuarios

class PostController {
    // Crear Post
    async create(req, res) {
        try {
            const { title, content, hashtags, imageUrl, userId } = req.body;

            const postData = {
                title,
                content,
                hashtags: hashtags ? hashtags.split(',').map(tag => tag.trim()) : [],
                imageUrl,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            await postService.createPost(userId, postData);

            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Obtener todos los posts
    async getAll(req, res) {
        try {
            const posts = await postService.getPosts();

            // Traemos un usuario para asociar posts (puede ser el primero o el usuario logueado)
            const user = await userRepository.findById("ID_DEL_USUARIO_REAL"); // reemplaza con un _id válido

            res.render("posts", { posts, user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Mostrar formulario de edición
    async editForm(req, res) {
        try {
            const post = await postRepository.findById(req.params.id);

            // También necesitamos el usuario para el hidden input
            const user = await userRepository.findById("ID_DEL_USUARIO_REAL"); // reemplaza con _id válido

            res.render("editPost", { post, user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar post
    async update(req, res) {
        try {
            const { title, content, hashtags, imageUrl } = req.body;

            const updateData = {
                title,
                content,
                hashtags: hashtags ? hashtags.split(',').map(tag => tag.trim()) : [],
                imageUrl,
                updatedAt: new Date()
            };

            await postRepository.update(req.params.id, updateData);
            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Eliminar post
    async delete(req, res) {
        try {
            await postRepository.delete(req.params.id);
            res.redirect("/posts");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new PostController();
