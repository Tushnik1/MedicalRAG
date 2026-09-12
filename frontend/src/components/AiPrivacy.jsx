import { Shield, Lock, Database, CheckCircle } from 'lucide-react';

const AiPrivacy = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "HIPAA Compliant",
      description: "Our platform adheres to strict healthcare privacy standards to protect your sensitive information."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "All your medical reports and data are encrypted during transmission and storage."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Secure Data Storage",
      description: "Your information is stored in secure, isolated environments with limited access controls."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Verified AI Models",
      description: "Our AI models are trained on validated medical datasets and regularly reviewed by healthcare professionals."
    }
  ];

  return (
    <section id="ai-accuracy" className="py-20 bg-[#F1F0FB] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">AI-Powered Accuracy with Uncompromising Privacy</h2>
          <p className="text-gray-700 mb-8">
            Our technology combines cutting-edge artificial intelligence with stringent privacy measures, ensuring you receive accurate insights while keeping your data completely secure.
          </p>

          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 p-1.5 bg-health-blue/10 text-health-blue rounded-lg mr-4">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative shadow-xl border-0 overflow-hidden rounded-xl bg-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-health-blue/10 via-transparent to-teal-100/30 z-0 rounded-xl" />
          <div className="relative z-10 p-8">
            <header className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-1">AI Accuracy Score</h3>
                <p className="text-sm text-gray-600">Based on verified medical evaluations</p>
              </div>
              <span className="bg-white rounded-full p-2 shadow">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </span>
            </header>

            {[ 
              { label: "Diagnostic Accuracy", value: "96%", color: "bg-[#33C3F0]" },
              { label: "Specialist Matching", value: "98%", color: "bg-[#14B8A6]" },
              { label: "Treatment Recommendations", value: "93%", color: "bg-[#6366F1]" }
            ].map((item, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}

            <blockquote className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-700">
                "Our AI models are continuously trained and validated by a team of medical professionals to ensure the highest standards of accuracy and reliability."
              </p>
              <footer className="flex items-center mt-3">
                <div className="h-8 w-8 rounded-full bg-health-blue-dark text-white flex items-center justify-center text-sm font-bold">
                  DR
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Dr. Rebecca Chen</p>
                  <p className="text-xs text-gray-500">Chief Medical Advisor</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPrivacy;
