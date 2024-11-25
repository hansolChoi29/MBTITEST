import { questions } from "../data/questions";

export const calculateMBTI = (answers) => {
  // 초기 점수 설정
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answers.forEach((answer, index) => {
    const questionType = questions[index].type;

    if (questionType.includes("E")) {
      if (answer === 0) scores.E += 1; // 첫 번째 옵션 선택
      else scores.I += 1; // 두 번째 옵션 선택
    } else if (questionType.includes("S")) {
      if (answer === 0) scores.S += 1;
      else scores.N += 1;
    } else if (questionType.includes("T")) {
      if (answer === 0) scores.T += 1;
      else scores.F += 1;
    } else if (questionType.includes("J")) {
      if (answer === 0) scores.J += 1;
      else scores.P += 1;
    }
  });

  const mbti =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");
  return mbti;
};
