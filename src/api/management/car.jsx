import axios from "axios";
const GetCarList = async () => {
  try {
    const res = await axios.post("/admin/management/car");
    console.log("res==", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

const RegisterCar = async (data) => {
  try {
    const res = await axios.post("/admin/management/car/addCar", data);
    console.log(res);
    return res.status;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export { GetCarList, RegisterCar };
