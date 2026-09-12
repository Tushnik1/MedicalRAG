import { Upload, Search, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Upload Your Reports",
      description: "Securely upload your medical reports, lab results, or health records in any format.",
      icon: <Upload className="h-8 w-8 text-white" />,
      color: "bg-[#33C3F0]"
    },
    {
      id: 2,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your data, identifying key insights and potential areas of concern.",
      icon: <Search className="h-8 w-8 text-white" />,
      color: "bg-[#14B8A6]"
    },
    {
      id: 3,
      title: "Expert Consultation",
      description: "Receive personalized recommendations and connect with specialists if needed.",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      color: "bg-[#6366F1]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20  bg-[#F4F5F7]">
      <div className="px-11 text-center  mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-3">How It Works</h2>
        <p className="text-gray-600">
          Our platform simplifies the process of understanding your health data through a seamless three-step approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {steps.map(({ id, title, description, icon, color }) => (
          <div
            key={id}
            className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md text-center transition"
          >
            <div className={`${color} flex justify-center items-center p-4 rounded-xl mx-auto w-1/5 mb-4 shadow`}>
              {icon}
            </div>
            <div className="w-8 h-8 mx-auto mb-3 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full font-bold text-sm">
              {id}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-100 to-teal-100 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Ready to get started?
          </h3>
          <p className="text-gray-700 mb-4">
            Join thousands of users who have already discovered insights about their health.
          </p>
          <button className=" bg-gradient-to-r from-[#1EAEDA] to-[#0D9589] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition">
            Upload Your First Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
