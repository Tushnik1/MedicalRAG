import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon } from "lucide-react";
import NavBar from "../components/NavBar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);
  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Simulate file scanning process
  const handleFileUpload = async () => {
    if (!file) return;
  
    setIsScanning(true);
    setScanSuccess(false);
  
    const formData = new FormData();
    formData.append("image", file); // key must match Flask: request.files["image"]
  
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData, // Automatically sets Content-Type to multipart/form-data
      });
  
      if (!response.ok) {
        throw new Error("Server error during scan.");
      }
  
      const result = await response.json();
  
      // Optional: store result in localStorage or pass via router state/context
      localStorage.setItem("scanResult", JSON.stringify(result));
  
      // Add a small delay to simulate scanning feel
      setTimeout(() => {
        setIsScanning(false);
        setScanSuccess(true);
        navigate("/scan-report");
      }, 1000);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Something went wrong. Please try again.");
      setIsScanning(false);
    }
  };
  

  return (<> <NavBar/>
    <div className="container mx-auto px-4 py-8 mt-12">

      {/* Upload Card */}
      <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mt-12 sm:mt-24">
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">Upload Medical Document</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-center">
            <UploadIcon className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-600 mb-2">
              Drag and drop your files here, or click to select files
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Supported formats: PDF, JPEG, PNG (max 10MB)
            </p>

            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpeg,.jpg,.png"
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-2 px-4 py-2 bg-[#33C3F0] text-white text-sm font-medium rounded-md hover:bg-[#28a8d8] transition">
                <UploadIcon className="h-4 w-4" />
                Select Files
              </div>
            </label>

            {/* Displaying file name after selection */}
            {file && (
              <p className="mt-4 text-sm text-gray-700">{file.name}</p>
            )}

            {/* Upload Button */}
            {file && !isScanning && (
              <button
                className="mt-4 px-4 py-2 bg-[#33C3F0] text-white text-sm font-medium rounded-md hover:bg-[#28a8d8] transition"
                onClick={handleFileUpload}
              >
                Upload & Scan
              </button>
            )}

            {/* Scanning State */}
            {isScanning && (
              <p className="mt-4 text-sm text-gray-500">Scanning file...</p>
            )}

            {/* Success State */}
            {scanSuccess && (
              <p className="mt-4 text-sm text-green-500">Scan completed successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Upload;
