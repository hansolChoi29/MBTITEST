import { useState, useEffect } from "react";
import { updateProfile } from "../api/auth";
import { getTestResults } from "../api/testResults";

const ProfilePage = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || ""); // 닉네임 상태
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const [message, setMessage] = useState(""); // 성공/실패 메시지
  const [testResults, setTestResults] = useState([]); // 테스트 결과 상태
  const [error, setError] = useState("");
  // 테스트 결과 가져오기
  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const results = await getTestResults();
        console.log("테스트 결과:", results);
        const userResults = results.filter(
          (result) => result.userId === user?.id
        ); // 사용자 필터링
        setTestResults(userResults);
      } catch (error) {
        console.error(
          "테스트 결과를 가져오는 중 오류가 발생했습니다:",
          error.message
        );
      }
    };

    fetchTestResults();
  }, [user]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 닉네임이 변경되지 않은 경우
    if (nickname === user?.nickname) {
      setMessage("닉네임이 변경되지 않았습니다.");
      setIsEditing(false); // 수정 모드 종료
      return;
    }

    try {
      setLoading(true);
      const updatedUser = await updateProfile({ nickname }); // 닉네임 업데이트
      setUser(updatedUser); // 전역 사용자 상태 업데이트
      setMessage("프로필이 성공적으로 업데이트되었습니다.");
      setIsEditing(false); // 수정 모드 종료
    } catch (error) {
      console.error("프로필 업데이트 실패:", error.message);
      setMessage("프로필 업데이트에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-[#465e69] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-white">프로필 페이지</h1>

      {/* 닉네임 표시 또는 수정 */}
      <div className="mb-6">
        <label className="block text-white font-semibold mb-2">닉네임</label>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="flex-1 px-4 py-2 bg-[#465e69] text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-blue-400"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#d6d9dc] text-[#465e69] py-2 px-4 rounded-md font-semibold hover:text-red-600 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "저장 중..." : "저장"}
            </button>
          </form>
        ) : (
          <div className="flex justify-between items-center">
            <span className="text-white">{nickname}</span>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[#d6d9dc] text-[#465e69] py-2 px-4 rounded-md font-semibold hover:text-red-600"
            >
              수정
            </button>
          </div>
        )}
      </div>

      {message && (
        <p className="mt-4 text-center text-sm text-white">{message}</p>
      )}

      {/* 테스트 결과 섹션 */}
      <h2 className="text-xl font-bold mt-8 mb-4 text-white">테스트 결과</h2>
      {testResults.length > 0 ? (
        <div className="space-y-4">
          {testResults.map((mbtiResult) => (
            <div
              key={mbtiResult.id}
              className="p-4 border rounded-md bg-gray-100 shadow-sm"
            >
              <p className="font-semibold text-lg text-[#465e69]">
                결과:{" "}
                <span className="text-blue-500">{mbtiResult.mbtiResult}</span>
              </p>
              <p className="text-sm text-gray-600">
                날짜:{" "}
                {new Date(mbtiResult.createdAt).toLocaleDateString("ko-KR")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-300">테스트 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default ProfilePage;
