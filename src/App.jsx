import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import ProfilePage from "./pages/Profilepage";
import Layout from "./components/Layout";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage ";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 기본 스타일

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/testResultpage" element={<TestResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
