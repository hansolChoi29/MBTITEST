import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth"; // 회원가입 API 호출
import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";

const Signuppage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    try {
      const response = await register(userData);
      console.log("회원가입 성공:", response);
      toast.success("회원가입이 완료되었습니다.");
      navigate("/loginpage"); // 회원가입 후 로그인 페이지로 이동
    } catch (err) {
      console.error("회원가입 실패:", err.response?.data || err.message);
      setError(err.response?.data?.message || "회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2f4f4f]">
      <div className="bg-[#465e69] p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Join</h1>
        <AuthForm onSubmit={handleRegister} error={error} />
      </div>
    </div>
  );
};

export default Signuppage;
