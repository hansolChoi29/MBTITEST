// src/components/Layout.jsx
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지
    // 로그아웃 로직 (예: 토큰 제거)
    localStorage.removeItem("token"); // 예시
    navigate("/");
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
      <main className="container mx-auto py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
