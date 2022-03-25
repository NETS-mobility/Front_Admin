import axios from "axios";
const GetAdminList = async () => {
  try {
    const res = await axios.post("/admin/management/admin", {
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("res==", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const GetAdminDetail = async (id) => {
  try {
    const res = await axios.post("/admin/management/admin/detail", { id: id });
    console.log("res==", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetAdminList, GetAdminDetail };
