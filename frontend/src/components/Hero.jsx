import { FileText, Shield, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => { 
  const navigate = useNavigate()
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-[#33C3F0]">
            <span className="mr-1">•</span> AI-Powered Health Analysis
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-4">
            Your Health, <span className="text-[#33C3F0]">Smarter</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-xl">
            Upload your medical reports and our AI instantly analyzes them, offering personalized insights and expert-backed consultation recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button onClick={()=>{
              navigate('/upload')
            }} className="px-6 py-3 bg-[#33C3F0] hover:bg-[#1EAEDB] cursor-pointer text-white text-sm font-medium rounded-md transition">
              Upload Report
            </button>
            <button className="px-6 py-3 border border-[#33C3F0] text-[#33C3F0] cursor-pointer hover:bg-blue-100 text-sm font-medium rounded-md transition">
              Learn More
            </button>
          </div>

          <div className="flex gap-6 mt-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#33C3F0]" /> HIPAA Compliant
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#33C3F0]" /> Doctor Reviewed
            </span>
            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#33C3F0]" /> Real-time Analysis
            </span>
          </div>
        </div>

        {/* Right Image with Progress */}
        <div className="relative rounded-lg overflow-hidden shadow-xl ring-1 ring-gray-200">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Medical report being analyzed"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />

          <div className="absolute right-4 bg-white/90 backdrop-blur rounded-lg p-4 shadow-md w-2/7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between items-center mb-4">
              <span className="flex items-center gap-2 text-xs text-green-600">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Analysis in progress
              </span>
              <Activity className="h-4 w-4 text-[#33C3F0]" />
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#33C3F0] w-3/4 rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Processing report data</span>
              <span className="font-medium text-black">75%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
