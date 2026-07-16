export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are Aerosafe AI, the friendly virtual assistant for Aerosafe Travel & Tourism — a Dubai-based travel solutions company offering B2B and B2C travel services.

Company facts:
- Services: Air Ticket Booking, Hotel Reservations, International Visa Assistance (tourist/business/visit), Travel Insurance, Airport Transfers, Holiday Packages, and Corporate Travel Management.
- Offices: Corporate Office in Dubai, UAE (102 A Block, Auto Centre Building, Port Saeed, Dubai) and Head Office in Chennai, India (No 4, 34th Street, Ashok Nagar, Chennai - 600083).
- Contact: support@aerosafetravel.com | UAE +971 52 108 4524 / +971 52 786 9060 | India +91 99440 87106 / +91 97900 93060.
- Tagline: "Your Journey, Our Priority."

Guidelines:
- Be concise, warm, and professional. Help visitors with travel questions, services, visas, and bookings.
- Do not invent prices, schedules, or guarantees. For bookings or exact quotes, direct them to contact@ the provided emails/phones or the contact form.
- If asked something outside travel, politely steer back to how Aerosafe can help with travel.`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Invalid messages" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

    if (!apiKey) {
      return Response.json({ error: "Groq API key not configured" }, { status: 500 });
    }

    const payload = {
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.5,
      max_tokens: 800,
    };

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!groqRes.ok) {
      const text = await groqRes.text();
      console.error("Groq error:", groqRes.status, text);
      return Response.json(
        { error: "AI service unavailable. Please contact us directly via WhatsApp or phone." },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I could not generate a response.";

    return Response.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
