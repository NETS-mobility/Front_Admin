import Layout from "./layout/layout";
import Modal from "react-modal/lib/components/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import ReservationList from "./pages/reservation/reservationList";
import ReservationDetail from "./pages/reservation/reservationDetail";
import ChangePW from "./pages/login/changePW";
import EditorContainer from "./pages/board/editorContainer";
import ServiceStat from "./pages/statistics/serviceStat";
import AdminRegister from "./pages/admin/adminRegister";
const App = () => {
  Modal.setAppElement("#root");
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changePW" element={<ChangePW />} />
        <Route path="/checkReservation" element={<ReservationList />} />
        <Route path="/reservationDetail" element={<ReservationDetail />} />
        <Route path="/noticeForMember" element={<EditorContainer />} />
        <Route path="/serviceStat" element={<ServiceStat />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
