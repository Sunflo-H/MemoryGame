import "./App.css";

const questionArr = [
  "이겨주세요",
  "비겨주세요",
  "져주세요",
  "지지말고 비기지도 마세요",
  "이기지말고 지지도 마세요",
  "비기지말고 이기지도 마세요",
];
const questionImageArr = ["가위", "바위", "보"];

function App() {
  const question = questionArr[getRandomIndex(questionArr.length)];
  const questionImage =
    questionImageArr[getRandomIndex(questionImageArr.length)];

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");
    console.log(value); // "가위"
    successCheck(question, questionImage, value);
  };

  return (
    <div className="container">
      <main>
        <div className="cpu-card">
          <div className="prompt">{question}</div>
          <div className="card">
            <img src={`/image/${questionImage}.png`}></img>
          </div>
        </div>
        <div className="user-hand">
          <div className="card" onClick={handleClick} data-value="가위">
            <img src="/image/가위.png"></img>
          </div>
          <div className="card" onClick={handleClick} data-value="바위">
            {" "}
            <img src="/image/바위.png"></img>
          </div>
          <div className="card" onClick={handleClick} data-value="보">
            {" "}
            <img src="/image/보.png"></img>
          </div>
        </div>
      </main>
    </div>
  );
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function successCheck(question, image, select) {
  console.log(question, image, select);
  if (image === "가위") {
    const answers = {
      이겨주세요: "바위",
      비겨주세요: "가위",
      져주세요: "보",
      "지지말고 비기지도 마세요": "바위",
      "이기지말고 지지도 마세요": "가위",
      "비기지말고 이기지도 마세요": "보",
    };

    const answer = answers[question];
    if (answer) {
      alert(select === answer ? "성공" : "실패");
    } else {
      alert("실패");
    }
  } else if (image === "바위") {
    const answers = {
      이겨주세요: "보",
      비겨주세요: "바위",
      져주세요: "가위",
      "지지말고 비기지도 마세요": "바위",
      "이기지말고 지지도 마세요": "가위",
      "비기지말고 이기지도 마세요": "보",
    };

    const answer = answers[question];
    if (answer) {
      alert(select === answer ? "성공" : "실패");
    } else {
      alert("실패");
    }
  } else {
    const answers = {
      이겨주세요: "가위",
      비겨주세요: "보",
      져주세요: "바위",
      "지지말고 비기지도 마세요": "가위",
      "이기지말고 지지도 마세요": "보",
      "비기지말고 이기지도 마세요": "바위",
    };

    const answer = answers[question];
    if (answer) {
      alert(select === answer ? "성공" : "실패");
    } else {
      alert("실패");
    }
  }
}

export default App;
