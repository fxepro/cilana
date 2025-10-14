import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { teamMembers, siteSections } from '@/content/data';
import { Flag, Goal, Cpu, Users2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Cilana",
  description: "Learn about the origins, goals, team, and Ethereum compatibility of Cilana Crypto.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          About Cilana
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover the story, vision, and the people behind Cilana, a project dedicated to advancing the decentralized web.
        </p>
      </header>

      {/* Project Origin and Goals Section */}
      <section className="mb-12 md:mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-from-top" style={{ animationDelay: '0.1s' }}>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-3">
                <Flag className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="text-2xl font-semibold text-primary font-headline">Project Origin</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {siteSections.about.origin}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="animate-slide-in-from-top" style={{ animationDelay: '0.2s' }}>
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-3">
                <Goal className="h-8 w-8 text-accent mr-3" />
                <CardTitle className="text-2xl font-semibold text-primary font-headline">Our Goals</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {siteSections.about.goals}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ethereum Ecosystem Compatibility Section */}
      <section className="mb-12 md:mb-20 animate-fade-in">
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary/10 p-8 flex items-center justify-center">
               <Cpu className="h-24 w-24 text-accent" />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary font-headline">Ethereum Ecosystem Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {siteSections.about.ethereumCompatibility}
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      {/* Team Bios Section */}
      <section className="mb-12 md:mb-20 animate-fade-in">
        <div className="text-center mb-12">
          <Users2 className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Cilana is powered by a dedicated team of experts (bios are illustrative).
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-accent/50">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={member.dataAiHint}
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-primary font-headline">{member.name}</CardTitle>
                <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
