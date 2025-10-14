import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { communityInfo } from '@/content/data';
import { Users, CalendarDays, Award, ArrowRight, MessageSquareHeart, Users2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cilana Community",
  description: "Join the Cilana community! Find information on upcoming events, the ambassador program, and how to get involved.",
};

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16 animate-fade-in">
        <Users2 className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Join the Cilana Community
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Be part of the movement. Connect, learn, and contribute to the growth of Cilana.
        </p>
      </header>

      {/* Get Involved Section */}
      <section className="mb-12 md:mb-20 animate-fade-in" style={{animationDelay: '0.1s'}}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <MessageSquareHeart className="h-10 w-10 text-accent mb-3" />
              <CardTitle className="text-xl font-semibold text-primary font-headline">Forum & Discussions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Engage with fellow community members, ask questions, and share your ideas on our official forum (Coming Soon).
              </CardDescription>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent/10" disabled>
                Visit Forum (Soon)
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <Users className="h-10 w-10 text-accent mb-3" />
              <CardTitle className="text-xl font-semibold text-primary font-headline">Social Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Follow us on our social media platforms for the latest news, announcements, and discussions.
              </CardDescription>
              <div className="space-x-2">
                <Button variant="outline" className="text-accent border-accent hover:bg-accent/10" disabled>Twitter (Soon)</Button>
                <Button variant="outline" className="text-accent border-accent hover:bg-accent/10" disabled>Discord (Soon)</Button>
              </div>
            </CardContent>
          </Card>
           <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <Users className="h-10 w-10 text-accent mb-3" />
              <CardTitle className="text-xl font-semibold text-primary font-headline">Developer Hub</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Access documentation, tools, and resources for building on Cilana. Connect with other developers.
              </CardDescription>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent/10" disabled>
                GitHub (Soon)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-12 md:mb-20 animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="text-left mb-8">
           <div className="flex items-center">
            <CalendarDays className="h-10 w-10 text-accent mr-3" />
            <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">
              Upcoming Events
            </h2>
          </div>
        </div>
        {communityInfo.upcomingEvents.length > 0 ? (
          <div className="space-y-6">
            {communityInfo.upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary font-headline">{event.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80">
                    <Link href={event.link} target="_blank" rel="noopener noreferrer">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Stay tuned for upcoming community events! We'll announce them here and on our social channels.</p>
        )}
      </section>

      {/* Ambassador Program Section */}
      <section className="animate-fade-in" style={{animationDelay: '0.3s'}}>
         <div className="text-left mb-8">
           <div className="flex items-center">
            <Award className="h-10 w-10 text-accent mr-3" />
            <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">
              Cilana Ambassador Program
            </h2>
          </div>
        </div>
        <Card className="shadow-lg bg-primary/5 border border-primary/20">
          <CardContent className="p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {communityInfo.ambassadorProgram.description}
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
              <Link href={communityInfo.ambassadorProgram.applyLink} target="_blank" rel="noopener noreferrer">
                Apply to be an Ambassador (Soon)
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
