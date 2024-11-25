import { useState } from "react";

const AuthForm = ({ onSubmit, error }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    nickname: "", // 닉네임 필드
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData); // 부모 컴포넌트로 데이터 전달
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 이메일 입력 */}
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="이메일"
        required
        className="w-full px-4 py-2 bg-[#465e69] text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-blue-400"
      />

      {/* 비밀번호 입력 */}
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
        className="w-full px-4 py-2 bg-[#465e69] text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-blue-400"
      />

      {/* 닉네임 입력 */}
      <input
        type="text"
        name="nickname"
        value={userData.nickname}
        onChange={handleChange}
        placeholder="닉네임"
        required
        className="w-full px-4 py-2 bg-[#465e69] text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-blue-400"
      />

      {/* 에러 메시지 표시 */}
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      {/* 제출 버튼 */}
      <button
        type="submit"
        className="w-full bg-[#d6d9dc] text-[#2f4f4f] py-2 rounded-md hover:text-red-500"
      >
        회원가입
      </button>
    </form>
  );
};

export default AuthForm;
