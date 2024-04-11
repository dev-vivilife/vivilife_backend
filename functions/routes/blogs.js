const express = require("express");
const router = express.Router();
const Blogs = require("../database/daos/blogs");


router.get("/", async (req, res) => {  
  try {
    const item = await Blogs.getAll();
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {  
  try {
    const item = await Blogs.getById(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {  
  try {
    const item = await Blogs.create(req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {  
  try {
    const item = await Blogs.update(req.params.id, req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {  
  try {
    const item = await Blogs.del(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/byauthor/:value", async (req, res) => {  
  try {
    const item = await Blogs.getByAuthor(req.params.value);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/bytags/:value", async (req, res) => {  
  try {
    const item = await Blogs.getByTags(req.params.value);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/bytimestamp/:value", async (req, res) => {  
  try {
    const item = await Blogs.getByTimestamp(req.params.value);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;