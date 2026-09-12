import { Navigate, useLocation, useNavigate } from "react-router-dom";

import DiagnosisCard from "../components/DiagnosisCard";
import DownloadButton from "../components/DownloadButton";

export default function Diagnosis() {
  const { state } = useLocation();

  const navigate = useNavigate();

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50 to-violet-200 py-10">

      <div className="max-w-5xl mx-auto px-5">

        <DiagnosisCard diagnosis={state} />

        <div className="flex justify-center gap-4 mt-8">

          <DownloadButton diagnosis={state} />

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-xl border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white transition"
          >
            New Diagnosis
          </button>

        </div>

      </div>

    </div>
  );
}