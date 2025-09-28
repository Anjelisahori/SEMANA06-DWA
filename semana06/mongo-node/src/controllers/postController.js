import * as postService from "../services/postService.js";

export const renderPosts = async (req, res) => {
  try {
    const posts = await postService.listPosts();
    res.render("posts/index", { posts }); 
  } catch (error) {
    res.status(500).send("Error al listar posts: " + error.message);
  }
};

export const renderNewForm = (req, res) => {
  res.render("posts/new"); 
};

export const createPost = async (req, res) => {
  try {
    const { title, content, hashtags, imageUrl } = req.body;

    await postService.addPost({
      title,
      content,
      hashtags,
      imageUrl: imageUrl && typeof imageUrl === "string" ? imageUrl.trim() : null, 
      createdAt: new Date(),
    });

    res.redirect("/posts");
  } catch (error) {
    res.status(400).send("Error al crear post: " + error.message);
  }
};

export const renderEditForm = async (req, res) => {
  try {
    const post = await postService.getPost(req.params.id);
    if (!post) return res.status(404).send("Post no encontrado");

    res.render("posts/edit", { post }); 
  } catch (error) {
    res.status(500).send("Error al obtener post: " + error.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { title, content, hashtags, imageUrl } = req.body;

    await postService.editPost(req.params.id, {
      title,
      content,
      hashtags,
      imageUrl: imageUrl && typeof imageUrl === "string" ? imageUrl.trim() : null, 
      updatedAt: new Date(),
    });

    res.redirect("/posts");
  } catch (error) {
    res.status(400).send("Error al actualizar post: " + error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    await postService.removePost(req.params.id);
    res.redirect("/posts");
  } catch (error) {
    res.status(500).send("Error al eliminar post: " + error.message);
  }
};
