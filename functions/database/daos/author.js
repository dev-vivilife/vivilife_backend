const { db } = require("../index");
const { v4: uuidv4 } = require("uuid");
const AuthorRef = db.collection("Author");

const getAuthorById = async (id) => {
  const docRef = AuthorRef.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createAuthor = async (data) => {
  const id = uuidv4();
  const docRef = AuthorRef.doc(id);
  await docRef.set({...data, id});
  const newAuthor = await docRef.get();
  return newAuthor.data();
};

const updateAuthor = async (id, data) => {
  const docRef =AuthorRef.doc(id);
  await docRef.update(data);
  const updatedAuthor = await docRef.get();
  return updatedAuthor.data();
};

const deleteAuthor = async (id) => {
  const docRef = AuthorRef.doc(id);
  await docRef.delete();
};

module.exports = {
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};