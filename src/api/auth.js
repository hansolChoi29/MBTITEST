import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log("회원가입 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error.response?.data || error.message);
    throw error;
  }
};

// 로그인
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log("로그인 성공:", response.data);

    // 서버에서 반환된 토큰 저장
    const token = response.data?.token;
    if (!token) {
      throw new Error("로그인 성공했으나 토큰을 받지 못했습니다.");
    }

    // 토큰 저장 (로컬 스토리지 또는 쿠키)
    localStorage.setItem("authToken", token); // 로컬 스토리지에 저장

    return response.data; // 로그인 데이터 반환
  } catch (error) {
    console.error("로그인 실패:", error.response?.data || error.message);
    throw error;
  }
};
