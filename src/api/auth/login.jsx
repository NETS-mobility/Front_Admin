import axios from "axios";
const LoginAPI = async (id, password) => {
  try {
    const res = await axios.post("/admin/login", {
      id: id,
      password: password,
    });
    return res;
  } catch (err) {
    return err;
  }
};

export { LoginAPI };
