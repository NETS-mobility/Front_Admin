import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MemberList,
  ManagerList,
  CarList,
  AdminList,
} from "./screens/management";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerList />} />
        <Route path="/manage/member/list" element={<MemberList />} />
        <Route path="/manage/manager/list" element={<ManagerList />} />
        <Route path="/manage/admin/list" element={<AdminList />} />
        <Route path="/manage/car/list" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
