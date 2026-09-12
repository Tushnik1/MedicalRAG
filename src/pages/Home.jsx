import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../components/Banner";
import ChatPortal from "../components/ChatPortal";

import { questions } from "../data/questions";
import { generateDiagnosis } from "../services/gemini";

const APP_STATE = {
  IDLE: "idle",
  API_KEY: "api_key",
  CHAT: "chat",
  GENERATING: "generating",
};

export default function Home() {
  const navigate = useNavigate();

  const [screen, setScreen] = useState(APP_STATE.IDLE);

  const [apiKey, setApiKey] = useState(
    sessionStorage.getItem("gemini_api_key") || ""
  );

  const [messages, setMessages] = useState([]);

  const [answers, setAnswers] = useState([]);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [keyInput, setKeyInput] = useState("");

  const openApiModal = () => {
    if (apiKey) {
      startChat();
      return;
    }

    setScreen(APP_STATE.API_KEY);
  };

  const saveApiKey = () => {
    if (!keyInput.trim()) return;

    sessionStorage.setItem("gemini_api_key", keyInput);

    setApiKey(keyInput);

    startChat();
  };

  const startChat = () => {
    setScreen(APP_STATE.CHAT);

    setMessages([
      {
        sender: "bot",
        message:
          "Hello 👋 I'm your AI Diagnosis Assistant. I'll ask you a few questions.",
      },
      {
        sender: "bot",
        message: questions[0],
      },
    ]);
  };

  const handleAnswer = async (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    const chat = [
      ...messages,
      {
        sender: "user",
        message: answer,
      },
    ];

    if (questionIndex < questions.length - 1) {
      chat.push({
        sender: "bot",
        message: questions[questionIndex + 1],
      });

      setMessages(chat);

      setQuestionIndex((prev) => prev + 1);

      return;
    }

    chat.push({
      sender: "bot",
      message: "Generating diagnosis...",
    });

    setMessages(chat);

    setScreen(APP_STATE.GENERATING);

    try {
      const diagnosis = await generateDiagnosis(
        apiKey,
        questions,
        newAnswers
      );

      navigate("/diagnosis", {
        state: diagnosis,
      });
    } catch (err) {
      alert(err.message);

      setScreen(APP_STATE.CHAT);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {screen === APP_STATE.IDLE && (
        <Banner onStart={openApiModal} />
      )}

      {(screen === APP_STATE.CHAT ||
        screen === APP_STATE.GENERATING) && (
        <div className="py-10 px-4">
          <ChatPortal
            messages={messages}
            currentQuestion={
              screen === APP_STATE.GENERATING
                ? null
                : questions[questionIndex]
            }
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {screen === APP_STATE.API_KEY && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[450px] rounded-3xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold text-violet-700">
              Gemini API Key
            </h2>

            <p className="mt-3 text-gray-600">
              Your API key is stored only for this browser session.
            </p>

            <input
              type="password"
              placeholder="AIza..."
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              className="w-full mt-6 border rounded-xl p-3"
            />

            <button
              onClick={saveApiKey}
              className="w-full mt-6 bg-violet-700 text-white py-3 rounded-xl hover:bg-violet-800"
            >
              Continue
            </button>
          </div>

        </div>
      )}
    </div>
  );
}