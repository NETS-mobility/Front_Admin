import SideBar from "./sideBar";
import TopBar from "./topBar";
import styles from "./layout.module.css";

const Layout = () => {
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
          <h1>Contents는 여기에!</h1>
        </div>
      </div>
    </div>
  );
};
export default Layout;
