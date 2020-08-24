import api from "../Firebase/instance";

const getTodosList = async (uid = "") => {
  try {
    const querySnapshot = await api.db.collection(
      "todos",
    ).where("uuid", "==", uid).get();

    const docs = [];
    querySnapshot.forEach(shapshot => docs.push(shapshot.data()));

    return docs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const putTodo = async (item = {}) => {
  try {

    const querySnapshot = await api.db.collection("tods").add(item);
    
    
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  getTodosList,
  putTodo
};