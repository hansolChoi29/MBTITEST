import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token"); // 인증 토큰 확인

  if (token) {
    return <Navigate to="/profilepage" />; // 이미 로그인한 사용자는 리디렉션
  }

  return <Outlet />; // 하위 라우트를 렌더링
};

export default PublicRoute;
