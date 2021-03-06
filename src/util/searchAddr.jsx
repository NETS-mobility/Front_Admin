import DaumPostCode from "react-daum-postcode";
const DaumPost = ({ setValue, setOpen }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setValue((prev) => ({ ...prev, garage_address: fullAddress }));
      setOpen(false);
    }
  };
  return <DaumPostCode onComplete={handleComplete} autoClose />;
};
export default DaumPost;
