import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("OpenAI client initialized in route.ts", openai);

export async function POST(req: NextRequest) {
  try {
    const { assistantId, message } = await req.json();

    if (!assistantId || !message) {
      return NextResponse.json(
        { error: "assistantId and message are required" },
        { status: 400 }
      );
    }

    // 1️⃣ Create thread
    const thread = await openai.beta.threads.create();

    // 2️⃣ Add user message
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message
    });

    // 3️⃣ Run assistant (polls internally)
    const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistantId
    });

    // 4️⃣ Handle failure states properly
    if (run.status === "failed") {
      console.error("Run failed:", run.last_error);
      return NextResponse.json(
        { error: run.last_error?.message || "Assistant run failed" },
        { status: 500 }
      );
    }

    if (run.status === "expired" || run.status === "cancelled") {
      return NextResponse.json(
        { error: `Assistant run ${run.status}` },
        { status: 500 }
      );
    }

    // 5️⃣ Fetch messages (even if status isn't strictly 'completed')
    const messages = await openai.beta.threads.messages.list(thread.id);

    const assistantMessage = messages.data.find(
      (msg) => msg.role === "assistant"
    );

    const reply =
      assistantMessage?.content?.[0]?.type === "text"
        ? assistantMessage.content[0].text.value
        : "No response from assistant";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}