import Layout from "../../../layout/layout";
import styles from "./car.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import { InputBox } from "../../../components/inputBox";
import CustomBtn from "../../../components/buttons";
import btnStyles from "../../../components/buttons.module.css";
import { useEffect, useState } from "react";
import ChangeObject from "../../../util/changeObject";
import { GetManagerList } from "../../../api/management/manager";
import { useNavigate } from "react-router-dom";
import DaumPost from "../../../util/searchAddr";
import { RegisterCar } from "../../../api/management/car";

const CarRegister = () => {
  let navigate = useNavigate();
  const [err, setErr] = useState("");
  const [managers, setManagers] = useState([]);
  const [car, setCar] = useState({
    number: "",
    type: "",
    manager_number: "",
    garage: "",
  });
  const [addr, setAddr] = useState("");
  const [open, setOpen] = useState(false);

  const CheckErr = () => {
    if (
      car.number == "" ||
      car.type == "" ||
      car.manager_id == "" ||
      car.garage == ""
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
    setCar({ ...car, manager_number: String(managers[0]?.num) });
  }, [managers]);

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

        <InputBox
          name={"number"}
          placeholder={"차량번호"}
          onChange={(e) => ChangeObject(setCar, "number", e)}
        />
        <InputBox
          name={"type"}
          placeholder={"차종"}
          onChange={(e) => ChangeObject(setCar, "type", e)}
        />

        <select
          className={styles.selectBox}
          onChange={(e) => ChangeObject(setCar, "manager_number", e)}
        >
          {managers.map((data, i) => {
            return (
              <option
                key={i}
                value={data.num}
              >{`${data.name} (${data.id})`}</option>
            );
          })}
        </select>

        <div onClick={() => setOpen(true)} className={styles.addrInput}>
          <span className={[typoStyles.fs32, typoStyles.fw400].join(" ")}>
            {car.garage == "" ? "차고지 주소" : car.garage}
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
