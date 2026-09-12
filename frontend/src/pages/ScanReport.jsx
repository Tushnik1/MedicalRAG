import { FileText, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const ScanReport = () => {
  const navigate = useNavigate();
  const scanResult = JSON.parse(localStorage.getItem("scanResult"));
  const report = {
    id: "REP-2025-001",
    patientName: "John Doe",
    date: "2025-04-20",
    examType: "Chest X-Ray",
    findings: [
      { key: "Primary Finding", value: `${scanResult['top_prediction']['label']} Score:${scanResult['top_prediction']['confidence']}` },
      { key: "Secondary Finding", value: `${scanResult['second_prediction']['label']} Score:${scanResult['second_prediction']['confidence']}` },
    ],
    impression: "Mild cardiac enlargement without acute cardiopulmonary disease.",
    recommendedAction: "Follow-up in 6 months recommended",
    doctorName: "Dr. Sarah Smith",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  };

  return (<> <NavBar/>
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical Report</h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">Report ID: {report.id}</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            className="px-4 py-2 border rounded-lg bg-white text-gray-800 border-gray-300 hover:bg-gray-100 flex items-center gap-2 transition"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print
          </button>
          <button className="px-4 py-2 border rounded-lg bg-white text-gray-800 border-gray-300 hover:bg-gray-100 flex items-center gap-2 transition">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Unified Desktop Card */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
        {/* Patient Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Information</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Patient Name</dt>
              <dd className="text-base">{report.patientName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Date</dt>
              <dd className="text-base">{report.date}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Exam Type</dt>
              <dd className="text-base">{report.examType}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Doctor</dt>
              <dd className="text-base">{report.doctorName}</dd>
            </div>
          </dl>
        </div>

        {/* Image + Analysis Row on Desktop */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Text Findings */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Analysis</h3>
            <div className="space-y-4">
              {report.findings.map((finding, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-gray-500">{finding.key}</h4>
                  <p className="text-base">{finding.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image on Right */}
          <div className="w-full md:w-[40%]">
            <img
              src={report.imageSrc}
              alt="X-Ray Analysis"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Diagnosis & Actions */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Diagnosis & Recommendations</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Impression</h4>
              <p className="text-base">{report.impression}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Recommended Action</h4>
              <p className="text-base">{report.recommendedAction}</p>
            </div>
          </div>
          <button
            className="w-full py-2 mt-6 border rounded-lg bg-[#6366F1] text-white hover:bg-[#4F4ED4] flex items-center justify-center gap-2 transition"
            onClick={() => navigate("/doctors")}
          >
            <FileText className="h-4 w-4" />
            Consult a Doctor
          </button>
        </div>
      </div>
    </div></>
  );
};

export default ScanReport;
