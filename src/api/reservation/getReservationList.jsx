import axios from "axios";

const GetReservationList = async (listType, listDate) => {
  console.log("listtype, date", listType, listDate);
  try {
    const res = await axios.post(
      `/admin/service/serviceList/${listType}/${listDate}`,
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

export { GetReservationList };
