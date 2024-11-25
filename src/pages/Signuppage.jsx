import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Signuppage = () => {
  const [error, setError] = useState(null); // 기존 구조 유지
  const navigate = useNavigate();

  // AuthForm에서 제출된 데이터를 처리하는 함수
  const handleSignup = async (userData) => {
    const { email, password, nickname } = userData;

    if (!email || !password || !nickname) {
      setError("이메일, 비밀번호, 닉네임은 필수값입니다.");
      return;
    }

    try {
      // 회원가입 요청
      await register({ email, password, nickname });

      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/loginpage"); // 로그인 페이지로 이동
    } catch (err) {
      console.error("회원가입 실패:", err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          "회원가입 중 문제가 발생했습니다. 다시 시도해주세요."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2f4f4f]">
      <div className="bg-[#465e69] p-8 rounded shadow-md w-96">
        <h1 className="text-2xl text-white font-bold mb-6 text-center">
          Sign Up
        </h1>
        {/* AuthForm에 onSubmit과 에러 메시지를 전달 */}
        <AuthForm onSubmit={handleSignup} error={error} />
      </div>
    </div>
  );
};

export default Signuppage;
