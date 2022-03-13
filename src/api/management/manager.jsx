import axios from "axios";
const ManagerDupCheck = async (id) => {
  try {
    const res = await axios.post("/admin/register/manager", { id });
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const RegisterManager = async (data) => {
  const { passwordConfirm, ...filteredData } = data;

  try {
    const res = await axios.post("/admin/register/manager", filteredData);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const GetManagerList = async () => {
  try {
    const res = await axios.post("/admin/management/manager");
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const GetManagerDetail = async (userNum) => {
  try {
    const res = await axios.post("/admin/management/manager/detail", {
      num: userNum,
    });
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetManagerList, GetManagerDetail, RegisterManager };
