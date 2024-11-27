// src/components/Layout.jsx
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 토큰 삭제
    localStorage.removeItem("token");

    // 필요하면 추가 상태 초기화
    console.log("Logged out");

    // 리디렉션
    window.location.href = "/"; // 홈으로 이동
  };

  return (
    <div>
      <form
        className="bg-[#2f4f4f] text-white py-4"
        onSubmit={handleLogout}
        method="POST"
      >
        <div className="container mx-auto flex justify-between items-center ">
          <Link to="/testpage" className="text-xl font-bold">
            MBTI TEST
          </Link>
          <div>
            <Link to="/testResultpage" className="mr-4 hover:underline">
              results
            </Link>
            <Link to="/profilepage" className="mr-4 hover:underline">
              Profile
            </Link>
            <Link
              to="/"
              type="submit"
              className="hover:underline bg-transparent border-none cursor-pointer"
            >
              Logout
            </Link>
          </div>
        </div>
      </form>

      <Outlet />
    </div>
  );
};

export default Layout;
