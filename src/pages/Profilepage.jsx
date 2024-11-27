import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import Layout from "../components/Layout";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("");
  const [originalNickname, setOriginalNickname] = useState(""); // 기존 닉네임 저장
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 관리
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log("현재 user 상태:", user);
    const fetchProfile = async () => {
      console.log(user);
      try {
        const profile = await getUserProfile(token);
        console.log(profile);

        setOriginalNickname(profile.nickname); // 초기 닉네임 설정
      } catch (error) {
        console.error("프로필정보를 못찾음");
      }
    };
    fetchProfile();
  }, []); // useEffect는 변경하지 않음

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 동작 방지
    try {
      if (!nickname.trim()) {
        toast.error("닉네임을 입력해주세요.");
        return;
      }
      if (nickname === originalNickname) {
        toast.error("닉네임이 변경되지 않았습니다.");
        return;
      }

      await updateProfile(token, { nickname }); // 서버로 닉네임 업데이트 요청
      toast.success("닉네임이 성공적으로 업데이트되었습니다.");
      setOriginalNickname(nickname); // 업데이트된 닉네임을 원래 닉네임으로 설정
      setIsEditing(false); // 수정 모드 종료
    } catch (err) {
      console.error("닉네임 업데이트 실패", err);
      toast.error("닉네임 업데이트에 실패했습니다.");
    }
  };

  return (
    <div>
      <Layout />
      <div className="min-h-screen bg-[#2f4f4f] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96">
          <div className="mb-8">
            <p className="text-center text-3xl font-bold text-[#2f4f4f] mb-4">
              Mypage
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mb-8">
            <label className="block text-center text-lg text-gray-700 font-semibold mb-2">
              닉네임:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)} // 닉네임 상태 업데이트
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                autoFocus
              />
            ) : (
              <p className="text-center text-gray-800">
                {user?.nickname || "닉네임 없음"}
              </p>
            )}
            {isEditing && (
              <button
                type="submit" // 폼 제출 버튼
                className="w-full bg-green-500 text-white py-2 px-4 mt-4 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                저장
              </button>
            )}
          </form>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)} // 수정 버튼 클릭 시 수정 모드 활성화
              className="w-full bg-[#2f4f4f] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1e3a3a] transition"
            >
              수정
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
