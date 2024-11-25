import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { calculateMBTI } from "../utils/mbtiCalculator";
//
const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [mbtiResult, setMbtiResult] = useState(null); // 결과 상태
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const result = calculateMBTI([...answers, answer]);
      setMbtiResult(result); // 결과 저장
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setMbtiResult(null); // 모달 닫기
  };

  if (mbtiResult) {
    // 결과 모달
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#465e69] bg-opacity-50">
        <div className="bg-[#2f4f4f] p-6 rounded-lg shadow-lg text-center w-full max-w-md">
          <h1 className="text-2xl text-white font-bold mb-4">
            Congratulation!
          </h1>
          <p className="text-lg text-white">
            당신의 MBTI는{" "}
            <span className="font-bold text-yellow-600">{mbtiResult}</span>{" "}
            입니다!
          </p>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleRetry}
              className="bg-[#d6d9dc] text-black py-2 px-4 rounded-lg hover:text-red-500"
            >
              다시 테스트하기
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-[#d6d9dc] text-black py-2 px-4 rounded-lg hover:text-red-500"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#465e69] bg-opacity-50">
      <div className="bg-[#2f4f4f] text-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">
          questions {currentQuestionIndex + 1} / {questions.length}
        </h1>
        <p className="mb-6">{currentQuestion.question}</p>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full bg-[#d6d9dc] text-[#2f4f4f] py-2 rounded-lg hover:text-red-500"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
