import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // 성공 시 반환되는 데이터
  } catch (error) {
    throw error.response?.data || error.message; // 오류 처리
  }
};

// 로그인
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const token = response.data?.accessToken; // 서버에서 반환된 토큰
    if (!token) {
      throw new Error("로그인에 실패했습니다. 토큰을 받지 못했습니다.");
    }
    localStorage.setItem("authToken", token); // 로컬 스토리지에 토큰 저장
    return response.data; // 성공 시 반환되는 데이터
  } catch (error) {
    throw error.response?.data || error.message; // 오류 처리
  }
};

// 사용자 프로필 가져오기
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // 인증 토큰
      },
    });
    return response.data; // 사용자 프로필 데이터 반환
  } catch (error) {
    throw error.response?.data || error.message; // 오류 처리
  }
};

// 프로필 업데이트
export const updateProfile = async (userData) => {
  try {
    const token = localStorage.getItem("authToken"); // 로컬 스토리지에서 토큰 가져오기
    if (!token) {
      throw new Error("인증 토큰이 없습니다. 로그인 후 다시 시도하세요.");
    }
    const response = await axios.put(`${API_URL}/profile`, userData, {
      headers: {
        Authorization: `Bearer ${token}`, // 인증 토큰
        "Content-Type": "application/json", // 요청 타입
      },
    });
    return response.data; // 업데이트된 사용자 데이터 반환
  } catch (error) {
    throw error.response?.data || error.message; // 오류 처리
  }
};

export const getTestResults = async () => {
  try {
    const token = localStorage.getItem("authToken"); // 인증 토큰 가져오기
    if (!token) {
      throw new Error("인증 토큰이 없습니다. 로그인 후 다시 시도하세요.");
    }

    const response = await axios.get(`${API_URL}/test-results`, {
      headers: {
        Authorization: `Bearer ${token}`, // 인증 토큰
      },
    });

    return response.data; // 테스트 결과 데이터 반환
  } catch (error) {
    console.error(
      "테스트 결과 가져오기 실패:",
      error.response?.data || error.message
    );
    throw error;
  }
};
