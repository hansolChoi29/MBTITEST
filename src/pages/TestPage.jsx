import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const TestPage = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers); // MBTI 결과 계산
    setResult(mbtiResult); // 결과 상태 저장

    try {
      // API 호출: 테스트 결과 서버에 저장
      const testData = {
        userId: user?.id || "guest", // 유저 ID가 없으면 "guest"로 처리
        mbtiResult,
        answers,
        createdAt: new Date().toISOString(), // 생성 시간 추가
      };

      await createTestResult(testData); // 서버에 데이터 저장
      console.log("테스트 결과 저장 성공:", testData);
    } catch (error) {
      console.error("테스트 결과 저장 실패:", error.message);
    }
  };

  return (
    <>
      <Layout />
      <div className="flex flex-col p-10 items-center justify-center min-h-screen bg-[#2f4f4f]">
        <div className="bg-[#d6d9dc] rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
          {!result ? (
            <>
              <h1 className="text-3xl font-bold text-primary-color mb-6">
                MBTI 테스트
              </h1>
              <TestForm onSubmit={handleTestSubmit} />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-white-700">
                테스트 결과: {result}
              </h1>
              <p className="text-lg text-white-700 mb-6">
                {mbtiDescriptions[result] ||
                  "해당 성격 유형에 대한 설명이 없습니다."}
              </p>
              <Link
                to="/profilepage"
                className="flex flex-col items-center justify-center"
              >
                profile
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TestPage;
