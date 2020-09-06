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

const deleteTodo = async id => {
  try {
    const result = await api.db.collection('todos').where("id", "==", id).get();

    if (!result.docs.length) throw new Error("no data for delete");

    for await (let doc of result.docs) {
      await api.db.collection('todos').doc(doc.id).delete();
    }

    return true;

  } catch (err) {
    console.error(err);
    return null;
  }
}

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
  putTodo,
  deleteTodo
};