import axios from "axios";
const GetMemberList = async () => {
  try {
    const res = await axios.post("/admin/management/customer");
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const GetMemberDetail = async (userNum) => {
  try {
    const res = await axios.post("/admin/management/customer/detail", {
      userNum: userNum,
    });
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetMemberList, GetMemberDetail };
