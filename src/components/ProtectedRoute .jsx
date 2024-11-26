import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("authToken"); // 인증 토큰 확인

  if (!token) {
    // 토큰이 없으면 로그인 페이지로 리디렉션
    return <Navigate to="/loginpage" />;
  }

  // 토큰이 있으면 보호된 경로로 이동
  return <Outlet />;
};

export default ProtectedRoute;
