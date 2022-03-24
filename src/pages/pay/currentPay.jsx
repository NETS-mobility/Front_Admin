import { useState, useEffect } from "react";
import styles from "./currentPay.module.css";
import Layout from "../../layout/layout";
import typoStyles from "../../assets/fonts/typography.module.css";
import GetCost from "../../api/pay/getCost";
import CustomBtn from "../../components/buttons";
import { useNavigate } from "react-router-dom";
import btnStyles from "../../components/buttons.module.css";
import CurrentServiceCost from "../../components/pay/currentServiceCost";
import CurrentExtraPay from "../../components/pay/currentExtraPay";
import CurrentManagerPay from "../../components/pay/currentManagerPay";

const CurrentPay = () => {
  const navigate=useNavigate();
  const [costs, setCosts] = useState("");
  const SetCurrentCost = async () => {
    setCosts(await GetCost().then((res) => res));
  };

  useEffect(() => {
    SetCurrentCost();
  }, []);

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
        현재 요금
      </h1>
      <div className={styles.currentPayContents}>
        {costs != "" && <CurrentServiceCost cost={costs} />}

        <section className={styles.payWithCategory}>
          {costs != "" && <CurrentExtraPay cost={costs} />}
        </section>
        <section className={styles.payWithCategory}>
          <CurrentManagerPay cost={costs} />
        </section>
        <div className={styles.payEditBtnSection}>
          <CustomBtn
            styleForBtn={[btnStyles.btnBlue, styles.payEditBtn].join(" ")}
            styleForText={typoStyles.fs36}
            text={"요금 변경"}
            onClick={()=>navigate('/editFee')}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CurrentPay;
