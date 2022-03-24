import axios from "axios";

const GetManagerNoticeList = async () => {
  const token = localStorage.getItem("accessToken");
  console.log("token?", token);
  try {
    const res = await axios.post("/admin/board/manager", { jwtToken: token });
    console.log("res in manager notice list=", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err.response);
    return err;
  }
};

const GetManagerNoticeRead = async (id) => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(`/admin/board/manager/read/${id}`, {
      jwtToken: token,
    });
    console.log("res in manager notice read=", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err.response);
    return err;
  }
};

const GetManagerNoticeWrite = async (title, content) => {
  //   const token = localStorage.getItem("accessToken");
  var formData = new FormData();
  formData.append("json", JSON.stringify({ title: title, content: content }));
  formData.append("files", "");
  try {
    const res = await axios.post("/admin/board/manager/write", formData, {});
    console.log("res in manager notice write", res.data);
    return res;
  } catch (err) {
    console.log("err", err.response);
    return err;
  }
};

const DeleteManagerNotice = async (id) => {
  try {
    const res = await axios.post("/admin/board/manager/delete", {
      id: id,
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("res in manager notice delete", res);
    return res;
  } catch (err) {
    console.log("err", err.response);
    return err;
  }
};

const GetCustomerNoticeList = async () => {
  try {
    const res = await axios.post("/admin/board/customer");
    console.log("res in customer notice list=", res.data);
    return res.data;
  } catch (err) {
    console.log("err=", err.response);
    return err;
  }
};

const GetCustomerNoticeRead = async (id) => {
  try {
    const res = await axios.post("/admin/board/customer/read", { id });
    console.log("res in customer notice read=", res);
    return res.data;
  } catch (err) {
    console.log("err=", err.response);
    return err;
  }
};

const GetCustomerNoticeWrite = async ({ data }) => {
  try {
    const res = await axios.post("/admin/board/customer/write", { data });
    console.log("res in customer notice write", res.data);
    return res;
  } catch (err) {
    console.log("err", err.response);
    return err;
  }
};

const DeleteCustomerNotice = async (id) => {
  try {
    const res = await axios.post("/admin/board/customer/delete", {
      id: id,
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("res in customer notice delete", res);
    return res;
  } catch (err) {
    console.log("err", err.response);
    return err;
  }
};

export {
  GetManagerNoticeList,
  GetManagerNoticeRead,
  GetManagerNoticeWrite,
  DeleteManagerNotice,
  GetCustomerNoticeList,
  GetCustomerNoticeRead,
  GetCustomerNoticeWrite,
  DeleteCustomerNotice,
};
