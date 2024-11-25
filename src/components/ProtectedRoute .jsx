import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("auth_token"); // 쿠키에서 토큰 가져오기
  const isAuthenticated = !!token; // 토큰이 있으면 인증된 상태

  if (!isAuthenticated) {
    return <Navigate to="/loginpage" replace />; // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  }

  return children;
};

export default ProtectedRoute;
