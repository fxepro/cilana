"use client"; // For react-hook-form

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Send, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useState, useTransition } from 'react';
import type { Metadata } from 'next';

// Cannot define metadata in client component, would need a separate layout or parent server component.
// For simplicity, we'll omit explicit metadata here, it will inherit from root.

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500),
});

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isContactPending, startContactTransition] = useTransition();
  const [isNewsletterPending, startNewsletterTransition] = useTransition();
  const [contactSuccess, setContactSuccess] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);


  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const newsletterForm = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onContactSubmit = (data: ContactFormData) => {
    setContactSuccess(false);
    startContactTransition(() => {
      // Simulate API call
      console.log("Contact form data:", data);
      setTimeout(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
          variant: "default",
        });
        setContactSuccess(true);
        contactForm.reset();
      }, 1000);
    });
  };

  const onNewsletterSubmit = (data: NewsletterFormData) => {
    setNewsletterSuccess(false);
    startNewsletterTransition(() => {
      // Simulate API call
      console.log("Newsletter email:", data.email);
      setTimeout(() => {
        toast({
          title: "Subscribed!",
          description: "You've successfully subscribed to the Cilana newsletter.",
          variant: "default",
        });
        setNewsletterSuccess(true);
        newsletterForm.reset();
      }, 1000);
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16 animate-fade-in">
        <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have questions, feedback, or partnership inquiries? We'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Contact Form Section */}
        <section className="animate-slide-in-from-top" style={{ animationDelay: '0.1s' }}>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary font-headline">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {contactSuccess ? (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-green-50 dark:bg-green-900/30 rounded-md">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mt-2">We'll be in touch soon.</p>
                  <Button onClick={() => setContactSuccess(false)} className="mt-6">Send Another Message</Button>
                </div>
              ) : (
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                  <FormField control={contactForm.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={contactForm.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={contactForm.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl><Input placeholder="Regarding..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={contactForm.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea placeholder="Your message..." rows={5} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isContactPending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {isContactPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Message
                  </Button>
                </form>
              </Form>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Signup Section */}
        <section className="animate-slide-in-from-top" style={{ animationDelay: '0.2s' }}>
          <Card className="shadow-xl bg-accent/10 border-accent/30">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Send className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="text-2xl font-semibold text-primary font-headline">Stay Updated</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Subscribe to the Cilana newsletter for the latest updates, project news, and community announcements.
              </CardDescription>
            </CardHeader>
            <CardContent>
             {newsletterSuccess ? (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-green-50 dark:bg-green-900/30 rounded-md">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Successfully Subscribed!</h3>
                  <p className="text-muted-foreground mt-2">Welcome to the Cilana community.</p>
                   <Button onClick={() => setNewsletterSuccess(false)} className="mt-6">Subscribe Another Email</Button>
                </div>
              ) : (
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="space-y-4">
                  <FormField control={newsletterForm.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isNewsletterPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isNewsletterPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Subscribe to Newsletter
                  </Button>
                </form>
              </Form>
             )}
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">Direct Contact</h3>
            <p className="text-muted-foreground">
              For partnership or media inquiries, please email us at: <br />
              <a href="mailto:contact@cilana.crypto" className="text-accent hover:underline">
                contact@cilana.crypto (Illustrative)
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
