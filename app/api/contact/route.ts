import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "203197a5-d7d4-424c-b13e-3d145e0d66b7";

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All transmission parameters are required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Invalid contact parameters." }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name,
        email,
        message,
        subject: `[Portfolio Comms] New Transmission from ${name}`,
        from_name: "Portfolio Comms Terminal",
      }),
    });

    const data = await response.json();

    if (!data.success) {
      console.error("Web3Forms submission failed:", data);
      return NextResponse.json({ error: data.message || "Failed to dispatch message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: "Transmission received." });
  } catch (error) {
    console.error("Web3Forms transmission error:", error);
    return NextResponse.json({ error: "Network transmission error." }, { status: 500 });
  }
}
