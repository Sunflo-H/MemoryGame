// 가위바위보 정답 맵 객체
export const ANSWER_OBJ = {
  가위: {
    이겨주세요: "바위",
    비겨주세요: "가위",
    져주세요: "보",
    "지지말고 비기지도 마세요": "바위",
    "이기지말고 지지도 마세요": "가위",
    "비기지말고 이기지도 마세요": "보",
  },
  바위: {
    이겨주세요: "보",
    비겨주세요: "바위",
    져주세요: "가위",
    "지지말고 비기지도 마세요": "보",
    "이기지말고 지지도 마세요": "바위",
    "비기지말고 이기지도 마세요": "가위",
  },
  보: {
    이겨주세요: "가위",
    비겨주세요: "보",
    져주세요: "바위",
    "지지말고 비기지도 마세요": "가위",
    "이기지말고 지지도 마세요": "보",
    "비기지말고 이기지도 마세요": "바위",
  },
};

export function successCheck(prompt, cpuChoice, playerChoice) {
  const correct_answer = ANSWER_OBJ[cpuChoice][prompt];

  alert(
    playerChoice === correct_answer ? "성공" : "틀렸습니다. 다시 해주세요."
  );
}

export function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}
