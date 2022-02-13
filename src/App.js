import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./pages/login/login";
// import ReservationList from "./pages/reservation/reservationList";

import {
  MemberList,
  ManagerList,
  CarList,
  AdminList,
} from "./pages/management";
import ManagerDetail from "./pages/management/manager/managerDetail";
import MemberDetail from "./pages/management/member/memberDetail";
import ManagerDetailEdit from "./pages/management/manager/managerDetailEdit";
import AdminDetail from "./pages/management/admin/adminDetail";
import AdminDetailEdit from "./pages/management/admin/adminDetailEdit";
import CarDetail from "./pages/management/car/carDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact={true} element={<Layout />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/reservationList" element={<ReservationList />} /> */}
        <Route path="/" element={<ManagerList />} />

        <Route path="/manage/member/list" element={<MemberList />} />
        <Route path="/member/detail/:id" element={<MemberDetail />} />

        <Route path="/manage/manager/list" element={<ManagerList />} />
        <Route path="/manager/detail/:id" element={<ManagerDetail />} />
        <Route
          path="/manager/detail/edit/:id"
          element={<ManagerDetailEdit />}
        />

        <Route path="/manage/admin/list" element={<AdminList />} />
        <Route path="/admin/detail/:id" element={<AdminDetail />} />
        <Route path="/admin/detail/edit/:id" element={<AdminDetailEdit />} />

        <Route path="/manage/car/list" element={<CarList />} />
        <Route path="/car/detail/:id" element={<CarDetail />} />
        {/* <Route path="/admin/detail/edit/:id" element={<AdminDetailEdit />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
