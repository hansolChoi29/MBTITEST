import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/testResults`;

// 테스트 결과 생성 (Create)
export const createTestResult = async (testData) => {
  try {
    const userId = JSON.parse(localStorage.getItem("user"))?.id; // 로컬 저장소에서 사용자 ID 가져오기
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/testResults`,
      {
        ...testData,
        userId, // 사용자 ID 추가
        createdAt: new Date().toISOString(), // 생성 시간 추가
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 테스트 결과 조회 (Read)
export const getTestResults = async () => {
  try {
    const response = await axios.get(`${API_URL}`); // 올바른 URL인지 확인
    console.log("테스트 결과 가져오기 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "테스트 결과 가져오기 실패:",
      error.response || error.message
    );
    throw error.response?.data || error.message;
  }
};

// 특정 테스트 결과 조회 (Read by ID)
export const getTestResultById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 테스트 결과 업데이트 (Update)
export const updateTestResult = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 테스트 결과 삭제 (Delete)
export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
