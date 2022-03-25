import Layout from "../../../layout/layout";
import styles from "./car.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import { useEffect, useState } from "react";
import ChangeObject from "../../../util/changeObject";
import { GetManagerList } from "../../../api/management/manager";
import { useNavigate } from "react-router-dom";
import DaumPost from "../../../util/searchAddr";
import { RegisterCar } from "../../../api/management/car";
import GeoCoder from "../../../util/geocoder";

const CarRegister = () => {
  let navigate = useNavigate();
  const [err, setErr] = useState("");
  const [managers, setManagers] = useState([]);
  const [car, setCar] = useState({
    number: "",
    type: "",
    netsmanager_number: "",
    garage_address: "",
    x: 0,
    y: 0,
  });
  const [open, setOpen] = useState(false);

  const CheckErr = () => {
    if (
      car.number == "" ||
      car.type == "" ||
      car.manager_id == "" ||
      car.garage_address == ""
    ) {
      setErr("빈칸을 모두 채워주세요");
    } else {
      setErr("");
    }
  };

  useEffect(() => {
    CheckErr();
  }, [car]);

  useEffect(() => {
    console.log("car==", car);
  }, [car]);

  useEffect(async () => {
    setManagers(await GetManagerList());
  }, []);

  useEffect(() => {
    setCar({ ...car, netsmanager_number: String(managers[0]?.number) });
  }, [managers]);

  useEffect(() => {
    if (car.garage_address != "") GeoCoder(car.garage_address, setCar);
  }, [car.garage_address]);

  return (
    <Layout>
      <h1
        className={[
          styles.title,
          typoStyles.fs36,
          typoStyles.textExplain,
          typoStyles.fw700,
        ].join(" ")}
      >
        차량 등록
      </h1>
      <section
        className={styles.carRegisterContent}
        onClick={() => {
          if (open) {
            setOpen(false);
          }
        }}
      >
        {open && (
          <div className={styles.background}>
            <div className={styles.addrBlock}>
              <DaumPost setValue={setCar} setOpen={setOpen} />
            </div>
          </div>
        )}
        <input
          type="text"
          name={"number"}
          placeholder={"차량번호"}
          onChange={(e) => ChangeObject(setCar, "number", e)}
          className={"inputboxstyle"}
        />
        <input
          type="text"
          name={"type"}
          placeholder={"차종"}
          onChange={(e) => ChangeObject(setCar, "type", e)}
          className={"inputboxstyle"}
        />

        <select
          className={styles.selectBox}
          onChange={(e) => ChangeObject(setCar, "netsmanager_number", e)}
        >
          {managers.map((data, i) => {
            return (
              <option
                key={i}
                value={data.number}
              >{`${data.name} (${data.id})`}</option>
            );
          })}
        </select>

        <div onClick={() => setOpen(true)} className={styles.addrInput}>
          <span className={[typoStyles.fs32, typoStyles.fw400].join(" ")}>
            {car.garage_address == "" ? "차고지 주소" : car.garage_address}
          </span>
        </div>

        <span
          className={[
            typoStyles.fs28,
            typoStyles.textPrimary,
            typoStyles.fw400,
            styles.errText,
          ].join(" ")}
        >
          {err}
        </span>
        <CustomBtn
          styleForBtn={[btnStyles.btnDarkGrey, styles.registerBtn].join(" ")}
          styleForText={typoStyles.fs36}
          text={"등록"}
          onClick={async () => {
            if (err == "") {
              const res = await RegisterCar(car);
              console.log("res==", res);
              if (res == 200) {
                navigate("/manage/car/list");
              }
            }
          }}
        />
      </section>
    </Layout>
  );
};

export default CarRegister;
