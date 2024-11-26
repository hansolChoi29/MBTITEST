import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 테스트 결과 생성 (Create)
export const createTestResult = async (testData) => {
  try {
    const response = await axios.post(`${API_URL}/test-results`, testData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 테스트 결과 조회 (Read)
export const getTestResults = async () => {
  try {
    const response = await axios.get(`${API_URL}/test-results`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 특정 테스트 결과 조회 (Read by ID)
export const getTestResultById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/test-results/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 테스트 결과 업데이트 (Update)
export const updateTestResult = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `${API_URL}/test-results/${id}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 테스트 결과 삭제 (Delete)
export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/test-results/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
