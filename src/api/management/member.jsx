import axios from "axios";
import GetToken from "../../util/getToken";
const GetMemberList = async () => {
  try {
    const res = await axios.post("/admin/management/customer", {
      jwtToken: GetToken(),
    });
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
      number: userNum,
      jwtToken: GetToken(),
    });
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetMemberList, GetMemberDetail };
