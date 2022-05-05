import axios from "axios";

const GetChangeManagerList = async (id) => {
  try {
    const res = await axios.post(
      `/admin/service/serviceDetail/${id}/getNetsmanList`,
      {
        jwtToken: localStorage.getItem("accessToken"),
      }
    );
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export { GetChangeManagerList };
