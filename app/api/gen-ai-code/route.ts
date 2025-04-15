import { GenAICode } from "@/config/gemini";
import { NextResponse } from "next/server";

// Configure longer timeout for the API route
export const maxDuration = 60; // This tells Vercel to allow up to 60 seconds for execution
export const dynamic = "force-dynamic"; // Prevents caching of responses

export async function POST(req: Request) {
    const { prompt } = await req.json();

    try {
        const result = await GenAICode.sendMessage(prompt);
        const resp = result.response.text();
        return NextResponse.json(JSON.parse(resp));
    } catch (e) {
        return NextResponse.json({ error: e });
    }
}
