import { useEffect, useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";

const QuestionCard = ({ onSubmit }) => {
  const [answer, setAnswer] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const send = () => {
    if (!answer.trim()) return;

    onSubmit(answer.trim());

    setAnswer("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      send();
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <input
        ref={inputRef}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your answer..."
        className="flex-1 rounded-xl border border-gray-300 px-5 py-3 outline-none focus:ring-2 focus:ring-violet-500"
      />

      <button
        onClick={send}
        disabled={!answer.trim()}
        className={`p-3 rounded-xl transition ${
          answer.trim()
            ? "bg-violet-700 hover:bg-violet-800 text-white"
            : "bg-gray-300 cursor-not-allowed text-gray-500"
        }`}
      >
        <SendHorizontal size={20} />
      </button>
    </div>
  );
};

export default QuestionCard;