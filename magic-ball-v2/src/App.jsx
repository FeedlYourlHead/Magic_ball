import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [isShaking, setIsShaking] = useState(false);

  const answers = [
    "Безусловно",
    "Попробуй позже",
    "Даже не думай",
    "Спроси у соседа",
    "Определённо да",
    "Вряд ли",
    "Звёзды говорят — да",
    "Лучше не надо",
  ];

  const handleGetAnswers = () => {
    if (!question.trim()) {
      alert("Пожалуйста, задайте вопрос!");
      return;
    }
    setIsLoading(true);
    setIsShaking(true);

    setTimeout(() => {
      const index = Math.floor(Math.random() * answers.length);
      const newAnswer = answers[index];

      setAnswer(newAnswer);

      const newEntry = `${question} - ${newAnswer}`;
      setHistory((prev) => [newEntry, ...prev.slice(0, 4)]);

      setIsLoading(false);
      setIsShaking(false);
    }, 1500);
  };
  const handleClearAll = () => {
    setQuestion("");
    setAnswer("");
    setHistory([]);
    setIsLoading(false);
    setIsShaking(false);
  };

  return (
    <>
      <div className="container">
        <h1>Магический шар предсказаний</h1>
        <div className={`ball ${isShaking ? "shaking" : ""}`}>
          <div className="ball-inner">
            {isLoading
              ? <span className="loading">Шар пробуждается...</span>
              : answer
              ? <span className="answer">{answer}</span>
              : <span className="question-mark">?</span>}
          </div>
        </div>

        <input
          type="text"
          placeholder="Задайте свой вопрос..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={handleGetAnswers}
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Узнать ответ"}
        </button>

        <button
          type="button"
          onClick={handleClearAll}
          className="clear-btn"
        >
          Очистить все
        </button>

        {answer && <p className="result">Ваш вопрос: "{question}"</p>}

        {history.length > 0 && (
          <div className="history-container">
            <h3>Предыдущие вопросы</h3>
            <ul className="history-list">
              {history.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
