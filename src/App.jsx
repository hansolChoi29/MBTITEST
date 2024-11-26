import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute ";
import HomePage from "./pages/HomePage";
import { getUserProfile } from "./api/auth";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import ProfilePage from "./pages/Profilepage";
import Layout from "./components/Layout";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage ";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      console.log("유효한 토큰 발견:", token);
      getUserProfile(token)
        .then((data) => {
          console.log("setUser 호출 전 데이터:", data);
          if (typeof data === "object" && data.id) {
            setUser(data); // 사용자 상태 업데이트
          } else {
            console.error("잘못된 사용자 데이터:", data);
          }
        })
        .catch((err) => {
          console.error("사용자 프로필 로드 실패:", err.message);
          localStorage.removeItem("authToken");
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route elemene={<Layout />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profilepage" element={<ProfilePage user={user} />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/testResultpage" element={<TestResultPage />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
