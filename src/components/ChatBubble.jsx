import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const ChatBubble = ({ sender, message }) => {
  const isBot = sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 mb-5 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-md">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 shadow-lg break-words ${
          isBot
            ? "bg-white text-gray-800 rounded-tl-sm"
            : "bg-violet-600 text-white rounded-tr-sm"
        }`}
      >
        <p className="leading-7 whitespace-pre-wrap">{message}</p>
      </div>

      {!isBot && (
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white shadow-md">
          <User size={18} />
        </div>
      )}
    </motion.div>
  );
};

export default ChatBubble;