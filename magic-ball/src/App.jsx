import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

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

  const handleGetAnswer = () => {
    if (!question.trim()) {
      alert("Пожалуйста, задайте вопрос!");
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
    <div className="container">
      <h1>Магический шар предсказаний</h1>
      <div className="ball">
        <div className="ball-inner">
          {answer
            ? <span className="answer">{answer}</span>
            : <span className="question-mark">?</span>}
        </div>
      </div>
      <input
        type="text"
        placeholder="Задайте свой вопрос..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="button" onClick={handleGetAnswer}>Узнать ответ</button>
      {answer && <p className="result">Ваш вопрос: "{question}"</p>}
    </div>
  );
}

export default App;

