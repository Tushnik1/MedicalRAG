import { motion } from "framer-motion";

const Banner = ({ onStart }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-violet-100 to-violet-600 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-violet-900">
          AI Health Diagnosis
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          Answer a few health-related questions and receive an AI-generated
          preliminary diagnosis, possible causes, recommended medicines,
          preventive measures, and a downloadable report.
        </p>

        <button
          onClick={onStart}
          className="mt-10 px-10 py-4 rounded-full bg-violet-700 text-white text-lg font-semibold shadow-lg hover:bg-violet-800 hover:scale-105 transition-all duration-300"
        >
          Start Diagnosis
        </button>
      </motion.div>
    </section>
  );
};

export default Banner;