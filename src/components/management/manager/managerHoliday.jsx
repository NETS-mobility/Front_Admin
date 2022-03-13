import ManagerCommonBlock from "./managerCommonBlock";
const ManagerHoliday = ({ type }) => {
  return (
    <>
      <ManagerCommonBlock
        title={"승인 필요"}
        content1={"휴가 시작일: 2021.12.12"}
        content2={"휴가 종료일: 2026.12.12"}
        type={type}
      />
      <ManagerCommonBlock
        title={"승인 완료"}
        content1={"휴가 시작일: 2021.12.12"}
        content2={"휴가 종료일: 2026.12.12"}
        type={type}
      />
      <ManagerCommonBlock
        title={"승인 완료"}
        content1={"휴가 시작일: 2021.12.12"}
        content2={"휴가 종료일: 2026.12.12"}
        type={type}
      />
    </>
  );
};

export default ManagerHoliday;
