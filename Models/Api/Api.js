import api from "../Firebase/instance";

const getTodosList = async (uid = "") => {
  try {

    const querySnapshot = await api.db.collection(
      "todos"
    ).where("uid", "==", uid).get();

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

    const querySnapshot = await api.db.collection("todos").add(item);
    if (querySnapshot && querySnapshot?.path) return item;
    else throw new Error("Bad put todo");

  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  getTodosList,
  putTodo
};