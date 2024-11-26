import { useLocation, useNavigate } from "react-router-dom";
import { calculateMBTI } from "../utils/mbtiCalculator";

const TestResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mbtiResult } = location.state || {};
  // 결과 page
  if (!mbtiResult) {
    return <p>결과 데이터가 없습니다. 테스트를 먼저 진행해주세요.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">MBTI 결과</h1>
        <p className="text-lg">
          당신의 MBTI는{" "}
          <span className="font-bold text-blue-600">{calculateMBTI}</span>{" "}
          입니다!
        </p>
        <button
          onClick={() => navigate("/testPage")}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
};

export default TestResultPage;
