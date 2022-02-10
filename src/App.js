import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ManageMember,
  ManageAdmin,
  ManageManager,
  ManageCar,
} from "./screens/management";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManageManager />} />
        <Route path="/manageMember" element={<ManageMember />} />
        <Route path="/manageManager" element={<ManageManager />} />
        <Route path="/manageAdmin" element={<ManageAdmin />} />
        <Route path="/manageCar" element={<ManageCar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
