import { useEffect, useState } from "react";
import { getTestResults } from "../api/auth";

const ProfilePage = ({ user }) => {
  const [testResults, setTestResults] = useState([]); // 테스트 결과 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(""); // 에러 상태
  const [mbtiResult, serMbtiResult] = useState("");
  useEffect(() => {
    console.log("useEffect 실행됨");
    console.log("현재 user 상태:", user);

    if (!user?.id) {
      setLoading(false);
      setError("사용자 정보가 없습니다. 테스트 결과를 가져오지 않습니다.");
      return;
    }

    const fetchTestResults = async () => {
      try {
        setLoading(true);
        const results = await getTestResults();
        const userResults = results.filter(
          (result) => result.userId === user.id
        );
        console.log("사용자 테스트 결과:", userResults);
        setTestResults(userResults);
      } catch (err) {
        console.error("테스트 결과를 가져오는 중 문제가 발생했습니다:", err);
        setError("테스트 결과를 가져오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, [user]);

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">프로필 페이지</h1>

      {/* 사용자 정보 */}
      <div className="mb-6">
        <label className="block text-gray-600 font-semibold mb-2">닉네임</label>
        <p className="text-gray-800">{user?.id || "닉네임 없음"}</p>
      </div>

      {/* 테스트 결과 */}
      <h2 className="text-xl font-bold mb-4 text-gray-800">테스트 결과</h2>
      {loading ? (
        <p className="text-gray-600">결과를 불러오는 중...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : testResults.length > 0 ? (
        <div className="space-y-4">
          {testResults.map((result) => (
            <div
              key={result.id}
              className="p-4 border rounded-md bg-white shadow-sm"
            >
              <p className="font-semibold text-lg text-gray-800">
                MBTI 결과:{" "}
                <span className="text-blue-600">{result.mbtiResult}</span>
              </p>
              <p className="text-sm text-gray-600">
                테스트 날짜:{" "}
                {new Date(result.createdAt).toLocaleDateString("ko-KR")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">저장된 테스트 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default ProfilePage;
