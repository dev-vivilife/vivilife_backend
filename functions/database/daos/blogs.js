const { db } = require("../index");
const { v4: uuidv4 } = require("uuid");
const BlogsRef = db.collection("Blogs");

const getBlogsById = async (id) => {
  const docRef = BlogsRef.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createBlogs = async (data) => {
  const id = uuidv4();
  const docRef = BlogsRef.doc(id);
  await docRef.set({...data, id});
  const newBlogs = await docRef.get();
  return newBlogs.data();
};

const updateBlogs = async (id, data) => {
  const docRef =BlogsRef.doc(id);
  await docRef.update(data);
  const updatedBlogs = await docRef.get();
  return updatedBlogs.data();
};

const deleteBlogs = async (id) => {
  const docRef = BlogsRef.doc(id);
  await docRef.delete();
};

module.exports = {
  getBlogsById,
  createBlogs,
  updateBlogs,
  deleteBlogs,
};