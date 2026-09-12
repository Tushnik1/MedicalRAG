import { FileText, Printer, Download } from "lucide-react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const reports = [
  {
    id: 1,
    title: "X-Ray Analysis",
    date: "2025-04-15",
    status: "Complete",
    doctor: "Dr. Sarah Smith",
    type: "Radiography",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 2,
    title: "MRI Scan Results",
    date: "2025-04-10",
    status: "Processing",
    doctor: "Dr. John Doe",
    type: "Magnetic Resonance",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 3,
    title: "CT Scan Report",
    date: "2025-04-05",
    status: "Complete",
    doctor: "Dr. Emily Brown",
    type: "Computed Tomography",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
];

const Reports = () => {
    const navigate = useNavigate()
  return (<><NavBar/>
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical Reports</h1>
          <p className="text-gray-500 mt-2">
            View and manage your medical reports
          </p>
        </div>
        {/* Button styled with Tailwind CSS and Lucide icon */}
        <button onClick={()=>[
            navigate('/upload')
        ]} className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 transition">
          <FileText className="h-4 w-4" />
          New Report
        </button>
      </div>

      {/* Container for the reports */}
      <div className="rounded-md border">
        {/* Table container */}
        <div className="grid grid-cols-5 gap-2 bg-gray-100 p-4">
          {/* Column Headers */}
          <div className="font-semibold text-left">Report</div>
          <div className="font-semibold text-left">Doctor</div>
          <div className="font-semibold text-left">Date</div>
          <div className="font-semibold text-left">Status</div>
          <div className="font-semibold text-left">Actions</div>
        </div>

        {/* Report rows */}
        {reports.map((report) => (
          <div key={report.id} className="grid grid-cols-5 gap-2 border-b p-4">
            <div className="flex items-center gap-3">
              <img
                src={report.thumbnail}
                alt={report.title}
                className="w-10 h-10 rounded object-cover"
              />
              <div>
                <p className="font-medium">{report.title}</p>
                <p className="text-sm text-gray-500">{report.type}</p>
              </div>
            </div>
            <div>{report.doctor}</div>
            <div>{report.date}</div>
            <div>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  report.status === "Complete"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {report.status}
              </span>
            </div>
            <div className="flex gap-2">
              {/* Actions with buttons */}
              <button className="px-4 py-2 bg-gray-300 text-black text-sm font-medium rounded-md hover:bg-gray-400">
                <Printer className="h-4 w-4" />
              </button>
              <button className="px-4 py-2 bg-gray-300 text-black text-sm font-medium rounded-md hover:bg-gray-400">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default Reports;
