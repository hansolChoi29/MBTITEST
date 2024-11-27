// src/components/Layout.jsx
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // 사용자 정보 삭제
    localStorage.removeItem("authToken"); // 토큰 삭제
    window.location.href = "/loginpage"; // 홈으로 리디렉션
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
