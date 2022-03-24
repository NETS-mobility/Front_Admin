import axios from "axios";
const GetCost = async () => {
  try {
    const res = await axios.post("/admin/cost/extra", {
      jwtToken: localStorage.getItem("accessToken"),
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default GetCost;
