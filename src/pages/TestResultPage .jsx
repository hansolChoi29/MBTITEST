import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";
import Layout from "../components/Layout";
const TestResultPage = () => {
  const [results, setResults] = useState([]);
  const loading = false;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const data = await getTestResults();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestResults();
  }, []);
  return (
    <>
      <Layout />
      <div className="w-full flex flex-col items-center justify-center bg-white mt-16 p-8">
        <h1 className="text-3xl font-bold mb-8 text-primary-color">
          모든 테스트 결과
        </h1>
        {loading ? ( // 로딩 상태 표시
          <p className="text-xl text-gray-500">로딩 중...</p>
        ) : (
          <TestResultList results={results} setResults={setResults} />
        )}
      </div>
    </>
  );
};

export default TestResultPage;
