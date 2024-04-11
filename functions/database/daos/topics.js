const db = require("../config");
const { v4: uuidv4 } = require("uuid");
const TopicsRef = db.collection("Topics");

const getTopicsById = async (id) => {
  const docRef = TopicsRef.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createTopics = async (data) => {
  const id = uuidv4();
  const docRef = TopicsRef.doc(id);
  await docRef.set({...data, id});
  const newTopics = await docRef.get();
  return newTopics.data();
};

const updateTopics = async (id, data) => {
  const docRef =TopicsRef.doc(id);
  await docRef.update(data);
  const updatedTopics = await docRef.get();
  return updatedTopics.data();
};

const deleteTopics = async (id) => {
  const docRef = TopicsRef.doc(id);
  await docRef.delete();
};

module.exports = {
  getTopicsById,
  createTopics,
  updateTopics,
  deleteTopics,
};