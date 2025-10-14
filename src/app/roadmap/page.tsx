import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { roadmapMilestones } from '@/content/data';
import type { RoadmapMilestone } from '@/content/data';
import { Milestone as MilestoneIcon, CheckCircle2, CircleDot, Circle, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cilana Roadmap",
  description: "Follow Cilana's journey from concept to mainnet and beyond. See our accomplished milestones and future goals.",
};

export default function RoadmapPage() {
  const getStatusIcon = (status: RoadmapMilestone['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-6 w-6 text-green-500" />;
      case 'in-progress':
        return <CircleDot className="h-6 w-6 text-blue-500 animate-pulse" />;
      case 'planned':
        return <Circle className="h-6 w-6 text-gray-400" />;
      default:
        return <MilestoneIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16 animate-fade-in">
        <MilestoneIcon className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Cilana Roadmap
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Charting the course for Cilana's development, from initial concept to a thriving ecosystem.
        </p>
      </header>

      {/* Milestones Section */}
      <section className="relative animate-fade-in">
        {/* Vertical line for timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border/70 transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {roadmapMilestones.map((milestone, index) => (
            <div 
              key={milestone.title} 
              className={cn(
                "md:flex items-start animate-slide-in-from-top",
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="md:w-1/2 flex md:justify-center mb-4 md:mb-0">
                <div className={cn(
                  "relative p-1",
                  index % 2 === 0 ? "md:mr-[-25px] md:ml-auto" : "md:ml-[-25px] md:mr-auto"
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-md",
                    `border-${milestone.colorClass.replace('text-', '')}` // Attempt to use color class for border
                  )}>
                    <milestone.icon className={cn("h-6 w-6", milestone.colorClass)} />
                  </div>
                </div>
              </div>

              <div className={cn(
                "md:w-1/2",
                index % 2 === 0 ? "md:text-left md:pl-[50px]" : "md:text-right md:pr-[50px]"
              )}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                       <CardTitle className={cn("text-xl font-semibold text-primary font-headline mb-1 md:mb-0", milestone.colorClass)}>
                        {milestone.title}
                      </CardTitle>
                      <span className={cn("text-sm font-medium px-2 py-0.5 rounded-full", 
                        milestone.status === 'completed' ? 'bg-green-100 text-green-700' :
                        milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      )}>
                        {milestone.date} - {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="mt-16 md:mt-24 text-center animate-fade-in" style={{ animationDelay: `${0.1 * roadmapMilestones.length}s` }}>
        <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary mb-6">
          Future Goals
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Beyond the current roadmap, Cilana aims to continuously evolve and innovate, focusing on:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Enhanced Cross-Chain Interoperability",
            "Advanced Privacy Features",
            "Decentralized Storage Solutions Integration",
            "Further Scalability Research (e.g., ZK-Rollups)",
            "Expansion of Global Community and Developer Ecosystem",
            "Real-world Asset Tokenization Platform",
          ].map((goal, index) => (
            <Card key={index} className="bg-secondary/50 p-6 shadow hover:shadow-md transition-shadow duration-300">
              <p className="font-semibold text-primary">{goal}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
