import axios from "axios";
// //{
//     "service_id": "string",
//     "service_state": 0,
//     "service_state_time": [
//       "string"
//     ]
//   }

const ChangeProgress = async (id, date, state, time) => {
  try {
    const res = await axios.post(
      `/admin/service/serviceDetail/${id}/changeProg`,
      {
        service_id: id,
        service_state: state,
        service_state_time: time,
        jwtToken: localStorage.getItem("accessToken"),
      }
    );
    console.log("res in changeprogress api=", res);
    return res;
  } catch (err) {
    console.log("err in changeprogress api=", err.response);
    return err.response;
  }
};

export { ChangeProgress };
