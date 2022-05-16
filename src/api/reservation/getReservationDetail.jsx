import axios from "axios";

const GetReservationDetail = async (id) => {
  try {
    const res = await axios.post(`/admin/service/serviceDetail/${id}`, {
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("reservation==", res.data);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export { GetReservationDetail };
