import axios from "axios";
const GetMyName = async () => {
  try {
    const res = await axios.post("/admin/getName", {
      jwtToken: localStorage.getItem("accessToken"),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export { GetMyName };
