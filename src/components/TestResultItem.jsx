import { toast } from "react-toastify";
import { updateTestResult } from "../api/testResults"; // 이미 있는 업데이트 함수 import
// deleteTestResult를 명시적으로 정의
const deleteTestResult = async (id) => {
  // 삭제 요청 처리 (예: API 요청)
  console.log(`삭제 요청: id=${id}`);
  // 여기 실제 API 호출 로직 추가 가능
  return Promise.resolve(); // 성공적으로 처리된 것으로 간주
};

const TestResultItem = ({ results, setResults, onDelete }) => {
  const { userId, id, mbtiResult } = results;

  const isOwner = true;

  // 공개 여부 토글 함수
  const handleVisibilityToggle = async () => {
    try {
      const updatedResult = await updateTestResult(results.id, {
        ...results,
        visibility: !results.visibility,
      });
      setResults((prevResults) =>
        prevResults.map((result) =>
          result.id === updatedResult.id ? updatedResult : result
        )
      );
      toast.success("공개 여부가 변경되었습니다.");
    } catch (err) {
      console.error("공개 여부 변경 실패:", err);
      toast.error("변경 실패!");
    }
  };

  // 삭제 버튼 핸들러
  const handleDelete = async () => {
    {
      try {
        await deleteTestResult(results.id); // 삭제 요청 호출
        setResults((prevResults) =>
          prevResults.filter((result) => result.id !== results.id)
        ); // 로컬 상태 업데이트
        toast.success("테스트 결과가 삭제되었습니다.");
      } catch (err) {
        console.error("테스트 결과 삭제 실패:", err);
        toast.error("삭제 실패!");
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg w-96 shadow-sm bg-[#465e69]">
      <h3 className="font-bold text-2xl text-[#d6d9dc]">
        {results.mbtiResult || "결과 없음"}
      </h3>
      <p className="text-sm text-gray-500">
        작성일: {new Date(results.createdAt).toLocaleDateString("ko-KR")}
      </p>
      <p className="text-sm text-red-500">
        공개 상태: {results.visibility ? "공개" : "비공개"}
      </p>

      {isOwner && (
        <div className="flex space-x-2 mt-4">
          <button
            onClick={handleVisibilityToggle}
            className={`px-4 py-2 text-white rounded ${
              results.visibility ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {results.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-[#d6d9dc] text-[#465e69] rounded"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
