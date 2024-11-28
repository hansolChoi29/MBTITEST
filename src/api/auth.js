import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 로그인
export const login = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/login?expiresIn=30m`,
      userData
    );
    // 서버 응답에서 데이터 가져오기
    const { accessToken, userId, nickname } = response.data;

    // 로컬 스토리지에 사용자 데이터와 토큰 저장
    localStorage.setItem("user", JSON.stringify({ userId, nickname }));
    localStorage.setItem("token", accessToken);
    console.log("API 응답 데이터:", response.data); // 디버깅
    return { userId, nickname, token: accessToken }; // 예상 데이터 구조: { accessToken: "TOKEN_VALUE" }
  } catch (error) {
    console.error("API 호출 실패:", error.response?.data || error.message);
    throw error;
  }
};

// 사용자 프로필 가져오기
export const getUserProfile = async (token) => {
  try {
    console.log("사용자 토큰:", token); // 토큰 확인
    console.log("요청 URL 확인:", API_URL + "/user");

    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("API 응답 데이터:", response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error("프로필 가져오기 실패:", error.response || error.message);
    throw error;
  }
};

// 프로필 업데이트
export const updateProfile = async (token, nickname) => {
  try {
    const formData = new FormData();
    // avatar와 nickname 중 하나 또는 모두 변경 가능
    formData.append("nickname", nickname);
    console.log("userData.nickname=>", nickname);
    const { data } = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("프로필 업데이트 실패");
  }
};
//   try {
//     const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
//     if (!token) {
//       console.error("로컬 스토리지에 토큰이 없습니다.");
//       throw new Error("인증 토큰이 없습니다. 로그인 후 다시 시도하세요.");
//     }
//     console.log("사용자 토큰:", token); // 디버깅용

//     const response = await axios.patch(`${API_URL}/profile`, userData, {
//       headers: {
//         Authorization: `Bearer ${token}`, // 인증 토큰
//         "Content-Type": "application/json", // 요청 타입
//       },
//     });

//     console.log("API 요청 URL:", `${API_URL}/profile`); // 디버깅용
//     console.log("전송 데이터:", userData); // 디버깅용
//     console.log("API 응답 데이터:", response.data); // 디버깅용

//     return response.data; // 업데이트된 사용자 데이터 반환
//   } catch (error) {
//     console.error("API 호출 오류:", error.response || error.message);
//     throw error.response?.data || error.message; // 오류 처리
//   }

// 이미지파일을 FormData에 담는 방법
