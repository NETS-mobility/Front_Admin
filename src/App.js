import Editor from "./components/editor";
import TableList from "./components/tableList";
import Layout from "./layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import ReservationList from "./pages/reservation/reservationList";
const App = () => {
  return (
        <Router>
          <Routes>
            <Route path="/" exact={true} element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reservationList" element={<ReservationList />} />
          </Routes>
        </Router>
    );
};

export default App;
