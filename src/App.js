import "./App.css";
import { getRandomIndex, successCheck } from "./gameLogic";

const promptArr = [
  "이겨주세요",
  "비겨주세요",
  "져주세요",
  "지지말고 비기지도 마세요",
  "이기지말고 지지도 마세요",
  "비기지말고 이기지도 마세요",
];

const cpuHandArr = ["가위", "바위", "보"];

function App() {
  const prompt = promptArr[getRandomIndex(promptArr.length)];
  const cpuChoice = cpuHandArr[getRandomIndex(cpuHandArr.length)];

  const handleClick = (e) => {
    const card = e.currentTarget;
    const value = card.getAttribute("data-value");

    // 애니메이션 클래스 추가
    card.classList.add("moving");

    // 애니메이션 완료 후 결과 체크
    setTimeout(() => {
      successCheck(prompt, cpuChoice, value);
      // 애니메이션 클래스 제거
      card.classList.remove("moving");
    }, 1100);
  };

  return (
    <div className="container">
      <main>
        <div className="cpu-hand">
          <div className="prompt">{prompt}</div>
          <div className="card">
            <img src={`/image/${cpuChoice}.png`} alt={cpuChoice}></img>
          </div>
        </div>
        <div className="user-hand">
          <div className="card" onClick={handleClick} data-value="가위">
            <img src="/image/가위.png" alt="가위"></img>
          </div>
          <div className="card" onClick={handleClick} data-value="바위">
            <img src="/image/바위.png" alt="바위"></img>
          </div>
          <div className="card" onClick={handleClick} data-value="보">
            <img src="/image/보.png" alt="보"></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
