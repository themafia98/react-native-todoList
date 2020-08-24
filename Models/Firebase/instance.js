import Firebase from "./Firebase";
import firebaseConfig  from "./config";

const api = new Firebase(firebaseConfig);
export default api;