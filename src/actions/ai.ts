'use server';

import { cilanaFaqAssistant, type CilanaFaqAssistantInput, type CilanaFaqAssistantOutput } from '@/ai/flows/cilana-faq-assistant';

export async function getFaqAnswer(input: CilanaFaqAssistantInput): Promise<CilanaFaqAssistantOutput | { error: string }> {
  try {
    // Basic input validation or sanitization can be added here if needed
    if (!input.question || input.question.trim().length === 0) {
      return { error: "Question cannot be empty." };
    }

    const result = await cilanaFaqAssistant(input);
    return result;
  } catch (error) {
    console.error("Error in getFaqAnswer server action:", error);
    // Avoid exposing detailed error messages to the client
    return { error: "An unexpected error occurred while processing your question. Please try again later." };
  }
}
