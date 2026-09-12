import {
  AlertTriangle,
  ClipboardPlus,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const Section = ({ icon, title, children }) => (
  <div className="bg-gray-50 rounded-2xl p-5 shadow-sm">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-violet-700">{title}</h3>
    </div>
    {children}
  </div>
);

const DiagnosisCard = ({ diagnosis }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
      <div className="text-center border-b pb-6">
        <h1 className="text-4xl font-bold text-violet-700">
          AI Diagnosis Report
        </h1>

        <p className="text-gray-500 mt-2">
          This report is AI-generated and should not replace professional
          medical consultation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Section
          title="Probable Disease"
          icon={<HeartPulse className="text-violet-700" />}
        >
          <p className="text-xl font-semibold">
            {diagnosis.probableDisease}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Confidence:</span>{" "}
            {diagnosis.confidence}
          </p>
        </Section>

        <Section
          title="Cause"
          icon={<ClipboardPlus className="text-violet-700" />}
        >
          <p>{diagnosis.cause}</p>
        </Section>

        <Section
          title="Immediate Medicines"
          icon={<Pill className="text-violet-700" />}
        >
          <ul className="space-y-3">
            {diagnosis.immediateMedicines?.map((med, index) => (
              <li key={index} className="border-b pb-2 last:border-none">
                <p className="font-semibold">{med.name}</p>
                <p className="text-sm text-gray-600">
                  {med.dosage}
                </p>
                <p className="text-sm">
                  {med.purpose}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Home Care"
          icon={<ShieldCheck className="text-violet-700" />}
        >
          <ul className="list-disc ml-5 space-y-2">
            {diagnosis.homeCare?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section
          title="Prevention"
          icon={<ShieldCheck className="text-green-600" />}
        >
          <ul className="list-disc ml-5 space-y-2">
            {diagnosis.prevention?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section
          title="Consult Doctor"
          icon={<Stethoscope className="text-violet-700" />}
        >
          <p>
            <strong>Recommended:</strong>{" "}
            {diagnosis.consultDoctor ? "Yes" : "No"}
          </p>

          <p className="mt-2">
            <strong>Specialist:</strong>{" "}
            {diagnosis.doctorSpecialist}
          </p>
        </Section>

        <div className="md:col-span-2">
          <Section
            title="Warning Signs"
            icon={<AlertTriangle className="text-red-500" />}
          >
            <ul className="list-disc ml-5 space-y-2">
              {diagnosis.warningSigns?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="md:col-span-2 bg-yellow-50 border border-yellow-300 rounded-2xl p-5">
          <h3 className="font-bold text-yellow-700">
            Medical Disclaimer
          </h3>

          <p className="mt-2 text-gray-700">
            {diagnosis.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisCard;