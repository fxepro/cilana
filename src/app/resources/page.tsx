import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { resourcesContent } from '@/content/data';
import type { ResourceContent } from '@/content/data';
import FaqAssistant from '@/components/ai/faq-assistant';
import { BookOpen, HelpCircle, Bot } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cilana Resources",
  description: "Explore educational content, FAQs, and an AI assistant to learn more about Cilana and blockchain technology.",
};

export default function ResourcesPage() {
  const faqs = resourcesContent.filter(r => r.type === 'faq');
  const blogPosts = resourcesContent.filter(r => r.type === 'blog');

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16 animate-fade-in">
        <BookOpen className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Resources & Learning Hub
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your gateway to understanding Cilana, Ethereum, and the broader world of decentralized technologies.
        </p>
      </header>

      {/* AI-Powered FAQ Assistant Section */}
      <section className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Card className="shadow-xl border-2 border-accent/50">
          <CardHeader className="bg-accent/10">
            <div className="flex items-center mb-2">
              <Bot className="h-8 w-8 text-accent mr-3" />
              <CardTitle className="text-2xl font-semibold text-primary font-headline">Cilana AI FAQ Assistant</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Have a question about Cilana? Ask our AI assistant!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <FaqAssistant />
          </CardContent>
        </Card>
      </section>

      {/* FAQs Section */}
      <section className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-left mb-8">
          <div className="flex items-center">
            <HelpCircle className="h-10 w-10 text-accent mr-3" />
            <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={faq.slug} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-from-top" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary font-headline">{faq.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{faq.summary}</p>
                {/* For a full page, you might link to a dynamic route /resources/[slug] */}
                {/* <Link href={`/resources/${faq.slug}`} className="text-accent hover:underline font-medium">
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link> */}
                 <p className="text-sm text-muted-foreground whitespace-pre-line">{faq.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="text-left mb-8">
           <div className="flex items-center">
            <BookOpen className="h-10 w-10 text-accent mr-3" />
            <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">
              From the Blog
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.slug} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-slide-in-from-top" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary font-headline">{post.title}</CardTitle>
                <CardDescription>{post.summary}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* For a full page, you might link to a dynamic route /resources/[slug] */}
                {/* <Link href={`/resources/${post.slug}`} className="text-accent hover:underline font-medium">
                  Read full article <span aria-hidden="true">&rarr;</span>
                </Link> */}
                <p className="text-sm text-muted-foreground whitespace-pre-line mt-2">{post.content.substring(0,150)}...</p>
              </CardContent>
               <div className="p-6 pt-0">
                 <Link href={`#`} className="text-accent hover:underline font-medium">
                  Read full article (Soon) <span aria-hidden="true">&rarr;</span>
                </Link>
               </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
