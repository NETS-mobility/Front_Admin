import axios from "axios";
const GetCarList = async () => {
  try {
    const res = await axios.post("/admin/management/car", {
      jwtToken: localStorage.getItem("accessToken"),
    });
    console.log("res==", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const RegisterCar = async (data) => {
  const garage_x = data.x;
  const garage_y = data.y;
  const { x, y, ...filtered } = data;
  const addData = {
    ...filtered,
    garage_x: garage_x,
    garage_y: garage_y,
    jwtToken: localStorage.getItem("accessToken"),
  };
  try {
    const res = await axios.post("/admin/management/car/addCar", addData);
    console.log(res);
    return res.status;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetCarList, RegisterCar };
