import express from "express";
import * as postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.renderPosts);       
router.get("/new", postController.renderNewForm);  
router.post("/", postController.createPost);      
router.get("/:id/edit", postController.renderEditForm); 
router.post("/:id", postController.updatePost);   
router.post("/:id/delete", postController.deletePost); 

export default router;
