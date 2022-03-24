import axios from "axios";

const GetStatistics = async (startDate, endDate) => {
  try {
    const res = await axios.post("/admin/statistics/service", {
      start: startDate,
      end: endDate,
      jwtToken: localStorage.getItem("accessToken"),
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export { GetStatistics };
