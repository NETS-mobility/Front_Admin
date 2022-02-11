import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./pages/login/login";
// import ReservationList from "./pages/reservation/reservationList";

import {
  MemberList,
  ManagerList,
  CarList,
  AdminList,
} from "./pages/management";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact={true} element={<Layout />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/reservationList" element={<ReservationList />} /> */}
        <Route path="/" element={<ManagerList />} />
        <Route path="/manage/member/list" element={<MemberList />} />
        <Route path="/manage/manager/list" element={<ManagerList />} />
        <Route path="/manage/admin/list" element={<AdminList />} />
        <Route path="/manage/car/list" element={<CarList />} />
      </Routes>
    </Router>
  );
};

export default App;
