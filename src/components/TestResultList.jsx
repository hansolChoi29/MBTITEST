import React, { useEffect, useState } from "react";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, setResults }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(results);
  return (
    <div className="space-y-4">
      {results.length === 0 ? (
        <p>표시할 테스트 결과가 없습니다.</p>
      ) : (
        results
          .filter(
            (result) => result.visibility || result.userid === user.userId
          )
          .map((result) => (
            <TestResultItem
              key={result.id}
              results={result}
              setResults={setResults}
            />
          ))
      )}
    </div>
  );
};

export default TestResultList;
