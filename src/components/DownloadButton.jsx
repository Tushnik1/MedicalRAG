import jsPDF from "jspdf";

const DownloadButton = ({ diagnosis }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    const addTitle = (title) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text(title, 20, y);
      y += 10;
    };

    const addText = (text) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      const lines = doc.splitTextToSize(text, 170);
      doc.text(lines, 20, y);

      y += lines.length * 7 + 5;
    };

    const addList = (items) => {
      items?.forEach((item) => {
        addText("• " + item);
      });
    };

    addTitle("AI Medical Diagnosis Report");

    addText(
      `Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    );

    addTitle("Probable Disease");
    addText(diagnosis.probableDisease);

    addTitle("Confidence");
    addText(diagnosis.confidence);

    addTitle("Cause");
    addText(diagnosis.cause);

    addTitle("Immediate Medicines");

    diagnosis.immediateMedicines?.forEach((med) => {
      addText(
        `${med.name}\nDosage: ${med.dosage}\nPurpose: ${med.purpose}`
      );
    });

    addTitle("Home Care");
    addList(diagnosis.homeCare);

    addTitle("Prevention");
    addList(diagnosis.prevention);

    addTitle("Consult Doctor");

    addText(
      diagnosis.consultDoctor
        ? `Yes\nRecommended Specialist: ${diagnosis.doctorSpecialist}`
        : "No"
    );

    addTitle("Warning Signs");
    addList(diagnosis.warningSigns);

    addTitle("Disclaimer");
    addText(diagnosis.disclaimer);

    doc.save("AI_Diagnosis_Report.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-8 py-3 rounded-xl bg-violet-700 text-white font-medium hover:bg-violet-800 transition shadow-lg"
    >
      ⬇ Download Prescription
    </button>
  );
};

export default DownloadButton;