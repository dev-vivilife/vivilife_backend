const express = require("express");
const router = express.Router();
const Author = require("../database/daos/author");


router.get("/", async (req, res) => {  
  try {
    const item = await Author.getAll();
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {  
  try {
    const item = await Author.getById(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {  
  try {
    const item = await Author.create(req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {  
  try {
    const item = await Author.update(req.params.id, req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {  
  try {
    const item = await Author.del(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;