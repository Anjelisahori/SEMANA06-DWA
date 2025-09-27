import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.getAll);
router.post("/", postController.create);
router.get("/delete/:id", postController.delete);
router.get("/edit/:id", postController.editForm);
router.post("/edit/:id", postController.update);

export default router;
