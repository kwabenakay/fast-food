import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Serving from "./pages/Serving";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className=" w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/serving" element={<Serving />} />
      </Routes>
    </div>
  );
}

export default App;
