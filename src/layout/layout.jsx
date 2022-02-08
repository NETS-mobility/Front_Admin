import SideBar from "./sideBar";
import TopBar from "./topBar";
import styles from "./layout.module.css";
import TableList from "../components/tableList";

const Layout = ({children}) => {
  return (
    <div className={`container-fluid ${styles.wholeLayout}`}>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col" style={{ backgroundColor: "#737373" }}>
          <SideBar />
        </div>
        <div
          className="col-10"
          style={{ backgroundColor: "#f7f7f7", padding: 0 }}
        >
          <TopBar />
          <TableList title1={"고객 ID"} title2={"고객명"} title3={"회원가입 일자"} />
        </div>
      </div>
    </div>
  );
};
export default Layout;
