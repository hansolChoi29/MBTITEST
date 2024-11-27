import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log("현재 user 상태:", user);
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile();
        console.log(profile);
        setNickname(profile.nickname);
      } catch (error) {
        console.error("프로필정보를 못찾음");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">프로필 페이지</h1>
      <div className="mb-6">
        <label className="block text-gray-600 font-semibold mb-2">닉네임</label>
        <p className="text-gray-800">{user?.nickname || "닉네임 없음"}</p>
      </div>
      <button>프로필업데이트</button>
    </div>
  );
};

export default ProfilePage;
