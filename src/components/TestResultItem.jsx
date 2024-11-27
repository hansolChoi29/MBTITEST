import { updateTestResult, deleteTestResult } from "../api/testResults";

const TestResultItem = ({ results, setResults }) => {
  const { userId, id, mbtiResult } = results;

  const isOwner = true;

  // 공개 여부 토글 함수
  //   const handleVisibilityToggle = async () => {
  //     try {
  //       const updatedResult = await updateTestResult(result.id, {
  //         ...result,
  //         visibility: !result.visibility,
  //       });
  //       onVisibilityChange(updatedResult);
  //       alert("공개 여부가 변경되었습니다.");
  //     } catch (err) {
  //       console.error("공개 여부 변경 실패:", err);
  //       alert("변경 실패!");
  //     }
  //   };

  // 삭제 버튼 핸들러
  //   const handleDelete = async () => {
  //     if (window.confirm("이 테스트 결과를 삭제하시겠습니까?")) {
  //       try {
  //         await deleteTestResult(result.id);
  //         onDelete(result.id);
  //       } catch (err) {
  //         console.error("테스트 결과 삭제 실패:", err);
  //         alert("삭제 실패!");
  //       }
  //     }
  //   };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="font-bold text-lg text-gray-800">
        {results.mbtiResult || "결과 없음"}
      </h3>
      <p className="text-sm text-gray-500">
        작성일: {new Date(results.createdAt).toLocaleDateString("ko-KR")}
      </p>
      <p className="text-sm text-gray-500">
        공개 상태: {results.visibility ? "공개" : "비공개"}
      </p>

      {isOwner && (
        <div className="flex space-x-2 mt-4">
          <button
            // onClick={handleVisibilityToggle}
            className={`px-4 py-2 text-white rounded ${
              results.visibility ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {results.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            // onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
