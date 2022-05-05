import axios from "axios";

const ChangeManager = async (id, dispatch, num) => {
  console.log("id랑 num", id, num);
  try {
    const res = await axios.post(
      `/admin/service/serviceDetail/${id}/changeNetsman`,
      {
        dispatch_id: dispatch,
        manager_number: num,
        jwtToken: localStorage.getItem("accessToken"),
      }
    );
    console.log("res", res);
    return res;
  } catch (err) {
    console.log("err", err.response);
    return err.response;
  }
};

export { ChangeManager };
