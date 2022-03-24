import styles from "./payPerService.module.css";
import typoStyles from "../../assets/fonts/typography.module.css";

const PayPerServiceLine = ({ type, title, content, setContent, unit }) => {
  return (
    <span
      className={[
        typoStyles.fs24,
        typoStyles.fw700,
        typoStyles.textExplain,
      ].join(" ")}
    >
      {title + " "}
      {type === 2 ? (
        <input
          type="text"
          className={[
            typoStyles.fs36,
            typoStyles.fw700,
            typoStyles.textPrimary,
            styles.inputBox,
          ].join(" ")}
          onChange={setContent}
          value={content}
        />
      ) : (
        <strong
          className={[
            typoStyles.fs36,
            typoStyles.fw700,
            typoStyles.textPrimary,
          ].join(" ")}
        >
          {content}
        </strong>
      )}
      <strong
        className={[
          typoStyles.fs36,
          typoStyles.fw700,
          typoStyles.textPrimary,
        ].join(" ")}
      >
        {unit}
      </strong>
    </span>
  );
};

const PayPerService = ({
  type,
  serviceName,
  value,
  setValue1,
  setValue2,
  setValue3,
}) => {
  const twoWay = serviceName.includes("왕복");
  const oneWay = serviceName.includes("편도");
  let way = "";
  if (oneWay) {
    way = "편도";
  } else if (twoWay) {
    way = "왕복";
  }

  return (
    <section className={styles.payPerServiceBlock}>
      <h1
        className={[
          typoStyles.fs36,
          typoStyles.fw700,
          typoStyles.textExplain,
        ].join(" ")}
      >
        {serviceName}
      </h1>
      <PayPerServiceLine
        type={type}
        title={"요금: 기본"}
        content={value?.cost}
        unit={"원"}
        setContent={setValue1}
      />
      <PayPerServiceLine
        type={type}
        title={`차량이동${serviceName != "네츠 무브" ? `(${way})` : ""}: 기본`}
        content={value?.dist}
        unit={"km"}
        setContent={setValue2}
      />
      {serviceName != "네츠 무브" && (
        <PayPerServiceLine
          type={type}
          title={`병원동행(${way}): 기본`}
          content={value?.time}
          unit={"분"}
          setContent={setValue3}
        />
      )}
    </section>
  );
};

const CostInput1 = ({ value, setValue, unit, otherStyle }) => {
  return (
    <>
      <input
        type="text"
        className={[
          typoStyles.fs28,
          typoStyles.fw700,
          typoStyles.textMain,
          styles.contentInput,
          otherStyle,
        ].join(" ")}
        onChange={setValue}
        value={value}
      />
      <strong
        className={[
          typoStyles.fs28,
          typoStyles.fw700,
          typoStyles.textExplain,
        ].join(" ")}
      >
        {unit}
      </strong>
    </>
  );
};

const CostInput2 = ({ setValue1, setValue2, unit, values }) => {
  return (
    <>
      <CostInput1
        setValue={setValue1}
        unit={unit}
        otherStyle={styles.contentInputS}
        value={values.value1}
      />
      <CostText text={"~"} />
      <CostInput1
        setValue={setValue2}
        unit={unit}
        otherStyle={styles.contentInputS}
        value={values.value2}
      />
    </>
  );
};

const CostText = ({ text }) => {
  return (
    <strong
      className={[
        typoStyles.fs28,
        typoStyles.fw700,
        typoStyles.textExplain,
      ].join(" ")}
    >
      {text}
    </strong>
  );
};

export const CostTitle = ({ text }) => {
  return (
    <>
      <div className={styles.content}>
        <CostText text={text.text1} />
      </div>
      <div className={styles.content}>
        <CostText text={text.text2} />
      </div>
    </>
  );
};

export const ShowCost = ({ text }) => {
  return (
    <>
      <div className={styles.content}>
        <CostText text={text.value} />
      </div>
      <div className={styles.content}>
        <CostText text={text.unit} />
      </div>
    </>
  );
};

export const CostCase1 = ({ setValue1, setValue2, units, values }) => {
  return (
    <>
      <div className={styles.content}>
        <CostInput1
          setValue={setValue1}
          unit={units.unit1}
          value={values.value1}
        />
      </div>
      <div className={styles.content}>
        <CostInput1
          setValue={setValue2}
          unit={units.unit2}
          value={values.value2}
        />
      </div>
    </>
  );
};

export const CostCase2 = ({ text, value, setValue, unit }) => {
  return (
    <>
      <div className={styles.content}>
        <CostText text={text} />
      </div>
      <div className={styles.content}>
        <CostInput1 setValue={setValue} unit={unit} value={value} />
      </div>
    </>
  );
};

export const CostCase3 = ({
  setValue1,
  setValue2,
  setValue3,
  units,
  values,
}) => {
  const { value3, ...filteredValues } = values;
  return (
    <>
      <div className={styles.content_case3}>
        <CostInput2
          setValue1={setValue1}
          setValue2={setValue2}
          unit={units.unit1}
          values={filteredValues}
        />
      </div>
      <div className={styles.content}>
        <CostInput1
          setValue={setValue3}
          unit={units.unit2}
          value={values.value3}
        />
      </div>
    </>
  );
};

export const CostBySentence = ({ text, value, setValue }) => {
  return (
    <h1
      className={[
        typoStyles.fs32,
        typoStyles.fw700,
        typoStyles.textExplain,
        styles.textInputBox,
      ].join(" ")}
    >
      {text?.text1}
      <input
        type="text"
        className={[
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textMain,
          styles.textInput,
        ].join(" ")}
        value={value}
        onChange={setValue}
      />
      {text?.text2}
    </h1>
  );
};

export const CostLine = ({ title, children }) => {
  return (
    <div className={styles.payWithCategory}>
      <h1
        className={[
          styles.title,
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textExplain,
        ].join(" ")}
      >
        {title}
      </h1>
      {children}
    </div>
  );
};

export const PayWithCategory = ({ title, value1, unit1, value2, unit2 }) => {
  return (
    <div className={styles.payWithCategory}>
      <h1
        className={[
          styles.title,
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textExplain,
        ].join(" ")}
      >
        {title}
      </h1>

      <div className={styles.content}>
        <strong
          className={[
            typoStyles.fs28,
            typoStyles.fw700,
            typoStyles.textMain,
          ].join(" ")}
        >
          {value1}
        </strong>
        <span
          className={[
            typoStyles.fs28,
            typoStyles.fw700,
            typoStyles.textExplain,
          ].join(" ")}
        >
          {unit1}
        </span>
      </div>

      <div className={styles.content}>
        <strong
          className={[
            typoStyles.fs28,
            typoStyles.fw700,
            typoStyles.textMain,
          ].join(" ")}
        >
          {value2}
        </strong>
        <span
          className={[
            typoStyles.fs28,
            typoStyles.fw700,
            typoStyles.textExplain,
          ].join(" ")}
        >
          {unit2}
        </span>
      </div>
    </div>
  );
};
export default PayPerService;
