import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import ChatBubble from "./ChatBubble";
import QuestionCard from "./QuestionCard";

const ChatPortal = ({
  messages,
  currentQuestion,
  onAnswer,
}) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const totalQuestions = 12;

  const current =
    currentQuestion
      ? Math.min(messages.filter((m) => m.sender === "user").length + 1, totalQuestions)
      : totalQuestions;

  const progress = (current / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto h-[88vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
    >
      <div className="bg-violet-700 text-white px-8 py-6">
        <h1 className="text-2xl font-bold">
          AI Diagnosis Assistant
        </h1>

        <p className="text-violet-100 mt-1">
          Please answer honestly for better predictions.
        </p>

        <div className="mt-5">
          <div className="flex justify-between text-sm mb-2">
            <span>
              Question {current} / {totalQuestions}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full h-2 bg-violet-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100 px-6 py-6">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

        <div ref={bottomRef} />
      </div>

      {currentQuestion && (
        <div className="border-t bg-white p-5">
          <QuestionCard onSubmit={onAnswer} />
        </div>
      )}
    </motion.div>
  );
};

export default ChatPortal;