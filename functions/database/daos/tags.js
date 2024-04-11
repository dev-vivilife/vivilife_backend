const { db } = require("../index");
const { v4: uuidv4 } = require("uuid");
const TagsRef = db.collection("Tags");

const getTagsById = async (id) => {
  const docRef = TagsRef.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createTags = async (data) => {
  const id = uuidv4();
  const docRef = TagsRef.doc(id);
  await docRef.set({...data, id});
  const newTags = await docRef.get();
  return newTags.data();
};

const updateTags = async (id, data) => {
  const docRef =TagsRef.doc(id);
  await docRef.update(data);
  const updatedTags = await docRef.get();
  return updatedTags.data();
};

const deleteTags = async (id) => {
  const docRef = TagsRef.doc(id);
  await docRef.delete();
};

module.exports = {
  getTagsById,
  createTags,
  updateTags,
  deleteTags,
};