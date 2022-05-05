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
    const res = await axios.post("/admin/management/admin/detail", {
      number: id,
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("res==", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const RegisterAdmin = async (data) => {
  try {
    const res = await axios.post("/admin/register/admin", {
      id: data.email,
      password: data.pw,
      name: data.name,
      phone: data.phone,
      birth: data.birth,
      jwtToken: localStorage.getItem("accessToken"),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

const DeleteAdmin = async (number) => {
  try {
    const res = await axios.post("/admin/management/admin/detail/deleteAdmin", {
      number: number,
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("res==", res);
    return res.status;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetAdminList, GetAdminDetail, RegisterAdmin, DeleteAdmin };
