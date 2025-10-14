import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteSections } from '@/content/data';
import { GitFork, FileJson, Lightbulb, Cog } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cilana Technology",
  description: "Explore the technology behind Cilana, its Ethereum leverage, smart contract capabilities, and potential use cases.",
};

export default function TechnologyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16 animate-fade-in">
        <Cog className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Cilana's Technology Stack
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Delving into the core components that make Cilana a powerful and versatile blockchain platform.
        </p>
      </header>

      {/* How Cilana Leverages Ethereum Section */}
      <section className="mb-12 md:mb-20 animate-slide-in-from-top" style={{ animationDelay: '0.1s' }}>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center mb-3">
              <GitFork className="h-8 w-8 text-accent mr-3" />
              <CardTitle className="text-2xl font-semibold text-primary font-headline">Leveraging the Ethereum Ecosystem</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {siteSections.technology.leveragingEthereum}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Smart Contract Capabilities Section */}
      <section className="mb-12 md:mb-20 animate-slide-in-from-top" style={{ animationDelay: '0.2s' }}>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center mb-3">
              <FileJson className="h-8 w-8 text-accent mr-3" />
              <CardTitle className="text-2xl font-semibold text-primary font-headline">Smart Contract Capabilities</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {siteSections.technology.smartContracts}
            </p>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Full EVM Compatibility</li>
                <li>Support for Solidity, Vyper, and other EVM languages</li>
                <li>Access to standard Ethereum developer tools (Hardhat, Truffle, Remix)</li>
                <li>Lower gas fees and faster execution times</li>
                <li>Ability to deploy complex dApps and DAOs</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Use Cases Section */}
      <section className="mb-12 md:mb-20 animate-fade-in">
        <div className="text-center mb-12">
          <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Potential Use Cases
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Cilana's versatile platform opens doors to a wide array of decentralized applications.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteSections.technology.useCases.map((useCase, index) => (
            <Card key={useCase.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary font-headline">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
