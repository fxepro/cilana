"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const faqSchema = z.object({
  question: z.string().min(10, { message: "Please ask a more detailed question (min 10 characters)." }).max(500),
});

type FaqFormData = z.infer<typeof faqSchema>;

export default function FaqAssistant() {
  const [isPending, setIsPending] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FaqFormData>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: "",
    },
  });

  const onSubmit = (data: FaqFormData) => {
    setAnswer(null);
    setError(null);
    setIsPending(true);
    
    // Simulate AI response for static export
    setTimeout(() => {
      setIsPending(false);
      setAnswer(`Thank you for your question: "${data.question}". 

For a comprehensive answer about Cilana's technology, security features, and development roadmap, please visit our detailed documentation or contact our team directly. We're constantly updating our platform with new features and improvements.

Key areas we can help with:
• Technical specifications and architecture
• Security and consensus mechanisms  
• Developer tools and APIs
• Integration guides and best practices
• Community and partnership opportunities

Feel free to explore our Resources section for more detailed information.`);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="faq-question" className="text-lg font-medium text-primary">Your Question:</FormLabel>
                <FormControl>
                  <Input 
                    id="faq-question" 
                    placeholder="e.g., How does Cilana ensure security?" 
                    {...field} 
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Answer...
              </>
            ) : (
              "Ask Cilana AI"
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <Card className="bg-destructive/10 border-destructive text-destructive p-4">
          <CardContent className="p-0">
            <p className="font-medium">Error</p>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {answer && (
        <Card className="bg-primary/5 border-primary/20 p-4">
          <CardContent className="p-0 space-y-2">
            <h3 className="text-lg font-semibold text-primary">Answer:</h3>
            <Textarea
                value={answer}
                readOnly
                className="min-h-[100px] bg-background text-sm leading-relaxed"
                rows={Math.max(3, Math.ceil(answer.length / 70))} // Adjust rows based on content
              />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
