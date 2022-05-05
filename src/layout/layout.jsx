import SideBar from "./sideBar";
import TopBar from "./topBar";
import styles from "./layout.module.css";
import { useEffect, useState } from "react";
import { GetMyName } from "../api/auth/getMyName";

const Layout = ({ children }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await GetMyName();
      setName(res.name);
    };
    fetchData();
  }, []);

  return (
    <div className={`container-fluid ${styles.wholeLayout}`}>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col" style={{ backgroundColor: "#737373" }}>
          <SideBar name={name} />
        </div>
        <div
          className="col-10"
          style={{ backgroundColor: "#f7f7f7", padding: 0 }}
        >
          <TopBar />
          <div className={styles.layoutChildren}>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
