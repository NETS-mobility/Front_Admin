import ManagerCommonBlock from "./managerCommonBlock";
import styles from "./manager.module.css";
import typoStyles from "../../../assets/fonts/typography.module.css";
import CheckEmptyArr from "../../../util/checkEmptyArr";
const ManagerCertificate = ({
  cert,
  userNum,
  setDeletedCert,
  setCert,
  setShow,
  type,
}) => {
  if (CheckEmptyArr(cert)) {
    return (
      <div className={styles.noData}>
        <h1
          className={[
            typoStyles.textExplain,
            typoStyles.fw400,
            typoStyles.fs36,
          ].join(" ")}
        >
          등록된 자격증이 없습니다.
        </h1>
      </div>
    );
  } else {
    return (
      cert != undefined &&
      cert?.map((data, i) => {
        console.log("testDat==", data);
        if (data.constructor === Object && Object.keys(data).length === 0) {
          return (
            <ManagerCommonBlock
              managerNum={userNum}
              key={i}
              type={"register-certificate"}
              chosen={i}
              setRegister={setCert}
              setShow={setShow}
            />
          );
        } else {
          return (
            <ManagerCommonBlock
              key={i}
              title={data?.name}
              type={type}
              content1={`취득일: ${data?.obtention?.substring(0, 10)}`}
              content2={`만료일: ${data?.expiration?.substring(0, 10)}`}
              certNum={data?.number}
              chosen={setDeletedCert}
            />
          );
        }
      })
    );
  }
};

export default ManagerCertificate;
