// use server'

/**
 * @fileOverview An AI assistant to answer questions about Cilana.
 *
 * - cilanaFaqAssistant - A function that answers questions about Cilana.
 * - CilanaFaqAssistantInput - The input type for the cilanaFaqAssistant function.
 * - CilanaFaqAssistantOutput - The return type for the cilanaFaqAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CilanaFaqAssistantInputSchema = z.object({
  question: z.string().describe('The question about Cilana to answer.'),
});
export type CilanaFaqAssistantInput = z.infer<typeof CilanaFaqAssistantInputSchema>;

const CilanaFaqAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Cilana.'),
});
export type CilanaFaqAssistantOutput = z.infer<typeof CilanaFaqAssistantOutputSchema>;

export async function cilanaFaqAssistant(input: CilanaFaqAssistantInput): Promise<CilanaFaqAssistantOutput> {
  return cilanaFaqAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cilanaFaqAssistantPrompt',
  input: {schema: CilanaFaqAssistantInputSchema},
  output: {schema: CilanaFaqAssistantOutputSchema},
  prompt: `You are an AI assistant that answers questions about Cilana.

  Answer the following question: {{{question}}}`,
});

const cilanaFaqAssistantFlow = ai.defineFlow(
  {
    name: 'cilanaFaqAssistantFlow',
    inputSchema: CilanaFaqAssistantInputSchema,
    outputSchema: CilanaFaqAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
