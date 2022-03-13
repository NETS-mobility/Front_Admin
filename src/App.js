import Layout from "./layout/layout";
import Modal from "react-modal/lib/components/Modal";
import Login from "./pages/login/login";
import ReservationList from "./pages/reservation/reservationList";
import ReservationDetail from "./pages/reservation/reservationDetail";
import ChangePW from "./pages/login/changePW";
import ManagerNoticeWrite from "./pages/notice/managerNoticeWrite";
import ManagerNoticeRead from "./pages/notice/managerNoticeRead";
import ServiceStat from "./pages/statistics/serviceStat";
import AdminRegister from "./pages/admin/adminRegister";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
// import CurrentPay from "./pages/pay/currentPay";
// import EditPay from "./pages/pay/editPay";
import ManagerRegister from "./pages/management/manager/managerRegister";
import ManagerRegisterComplete from "./pages/management/manager/managerRegisterComplete";
import CarRegister from "./pages/management/car/carRegister";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  Modal.setAppElement("#root");
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact={true} element={<Layout />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/changePW" element={<ChangePW />} />
        <Route path="/reservation/list" element={<ReservationList />} />
        <Route path="/reservation/detail/:id" element={<ReservationDetail />} />
        <Route path="/notice/manager/read" element={<ManagerNoticeRead />} />
        <Route path="/notice/manager/write" element={<ManagerNoticeWrite />} />
        <Route path="/serviceStat" element={<ServiceStat />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/" element={<ManagerList />} />

        <Route path="/manage/member/list" element={<MemberList />} />
        <Route path="/member/detail/:id" element={<MemberDetail />} />

        <Route path="/manage/manager/register" element={<ManagerRegister />} />
        <Route
          path="/manage/manager/registerComplete"
          element={<ManagerRegisterComplete />}
        />
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
        <Route path="/manage/car/register" element={<CarRegister />} />
        <Route path="/car/detail/:id" element={<CarDetail />} />

        {/* <Route path="/setFee" element={<CurrentPay />} />
        <Route path="/editFee" element={<EditPay />} /> */}
        {/* <Route path="/admin/detail/edit/:id" element={<AdminDetailEdit />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
