const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";

function buildPrompt(questions, answers) {
  const conversation = questions
    .map((question, index) => {
      return `Question ${index + 1}: ${question}
Answer ${index + 1}: ${answers[index] || "No answer"}
`;
    })
    .join("\n");

  return `
You are an experienced medical AI assistant.

The following are the patient's responses to a symptom questionnaire.

${conversation}

Based ONLY on the above information, generate a preliminary diagnosis.

IMPORTANT RULES

- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap in \`\`\`.
- Do NOT explain anything.
- Do NOT add notes before or after the JSON.
- If information is insufficient, make the best possible estimation and lower the confidence.

Return exactly this structure:

{
  "probableDisease": "",
  "confidence": "",
  "cause": "",
  "immediateMedicines": [
    {
      "name": "",
      "dosage": "",
      "purpose": ""
    }
  ],
  "homeCare": [],
  "prevention": [],
  "consultDoctor": true,
  "doctorSpecialist": "",
  "warningSigns": [],
  "disclaimer": "This AI-generated diagnosis is not a substitute for professional medical advice."
}
`;
}

function cleanJson(text) {
  let cleaned = text.trim();

  cleaned = cleaned.replace(/```json/g, "");
  cleaned = cleaned.replace(/```/g, "");

  return cleaned.trim();
}

export async function generateDiagnosis(
  apiKey,
  questions,
  answers
) {
  if (!apiKey) {
    throw new Error("Gemini API key not found.");
  }

  const prompt = buildPrompt(questions, answers);

  const response = await fetch(
    `${GEMINI_ENDPOINT}?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.error?.message || "Failed to contact Gemini API."
    );
  }

  const data = await response.json();

  if (!data.candidates?.length) {
    throw new Error("No response received from Gemini.");
  }

  const text =
    data.candidates[0].content.parts[0].text;

  try {
    return JSON.parse(cleanJson(text));
  } catch (err) {
    console.error(text);

    throw new Error(
      "Gemini returned an invalid JSON response."
    );
  }
}