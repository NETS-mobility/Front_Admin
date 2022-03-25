import axios from "axios";
import GetToken from "../../util/getToken";
const EditManagerInfo = async (data) => {
  const arrangedData = {
    number: data.number,
    id: data.id,
    phone: data.phone,
    available: data.available,
    salary: 0,
  };

  try {
    const res = await axios.post(
      "/admin/management/manager/detail/changeInfo",
      {
        ...arrangedData,
        jwtToken: GetToken(),
      }
    );
    console.log("edit res=", res);
    return res.status;
  } catch (err) {
    return err;
  }
};

const DeleteCert = (certs, userNum) => {
  try {
    let res = "";
    certs.forEach(async (data) => {
      res = await axios.post(
        "/admin/management/manager/detail/deleteCertificate",
        {
          number: userNum,
          cert_num: data,
          jwtToken: GetToken(),
        }
      );
      console.log("delete cert res=", res);
      return res.status;
    });
    return res;
  } catch (err) {
    return err;
  }
};

const DeleteManager = async (managerNum) => {
  try {
    const res = await axios.post(
      "/admin/management/manager/detail/deleteManager",
      { number: managerNum, jwtToken: GetToken() }
    );
    return res.status;
  } catch (err) {
    return err;
  }
};

const AddCert = async (data) => {
  const { managerNum } = data;
  try {
    const res = await axios.post(
      "/admin/management/manager/detail/addCertificate",
      {
        number: data.managerNum,
        cert_name: data.cert_name,
        cert_num: data.cert_num,
        cert_obtainDate: data.cert_obtained,
        cert_expireDate: data.cert_expired,
        jwtToken: GetToken(),
      }
    );
    return res.status;
  } catch (err) {
    return err;
  }
};

const RegisterManager = async (data, token) => {
  const { passwordConfirm, ...filteredData } = data;

  try {
    const res = await axios.post("/admin/register/manager", {
      ...filteredData,
      jwtToken: GetToken(),
    });
    console.log("res", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const GetManagerList = async () => {
  try {
    const res = await axios.post("/admin/management/manager", {
      jwtToken: GetToken(),
    });
    console.log("res==", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const GetManagerDetail = async (userNum) => {
  console.log(userNum);
  try {
    const res = await axios.post("/admin/management/manager/detail", {
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

export {
  GetManagerList,
  GetManagerDetail,
  DeleteManager,
  RegisterManager,
  EditManagerInfo,
  AddCert,
  DeleteCert,
};
