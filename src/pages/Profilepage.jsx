import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";
import Layout from "../components/Layout";

const ProfilePage = () => {
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log("현재 user 상태:", user);
    const fetchProfile = async () => {
      console.log(user);
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
    <div>
      <Layout />
      <div className="min-h-screen bg-[#2f4f4f] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96">
          <div className="mb-8">
            <p className="text-center text-3xl font-bold text-[#2f4f4f] mb-4">
              Mypage
            </p>
          </div>
          <div className="mb-8">
            <label className="block text-center text-lg text-gray-700 font-semibold">
              닉네임: {user?.nickname || "닉네임 없음"}
            </label>
          </div>
          <button className="w-full bg-[#2f4f4f] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1e3a3a] transition">
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
