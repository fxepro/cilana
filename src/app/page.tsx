import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { features, siteSections } from '@/content/data';
import type { FeatureItem } from '@/content/data';
import { FileText, Users, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex items-center justify-center gradient-hero text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight leading-tight">
              Build anything
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                onchain
              </span>
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              The blockchain platform that empowers developers to build the future of decentralized applications with speed, security, and seamless Ethereum compatibility.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Link href="/about">Start Building <ArrowRight className="ml-2 h-6 w-6" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <Link href="/resources">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="w-full py-16 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder for partner logos - you can replace with actual logos */}
            <div className="text-2xl font-bold text-muted-foreground">Ethereum</div>
            <div className="text-2xl font-bold text-muted-foreground">Polygon</div>
            <div className="text-2xl font-bold text-muted-foreground">Arbitrum</div>
            <div className="text-2xl font-bold text-muted-foreground">Optimism</div>
            <div className="text-2xl font-bold text-muted-foreground">Chainlink</div>
            <div className="text-2xl font-bold text-muted-foreground">Uniswap</div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground mb-6">
                The blockchain platform you build everything on
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {siteSections.homepage.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <Link href="/technology">Explore Technology</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="gradient-card rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Lightning Fast</h3>
                      <p className="text-muted-foreground">Sub-second transaction speeds</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🔒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Ethereum Compatible</h3>
                      <p className="text-muted-foreground">Seamless EVM integration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Developer Ready</h3>
                      <p className="text-muted-foreground">Powerful APIs and tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="gradient-card rounded-2xl p-8 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">$150B+</div>
                <p className="text-muted-foreground text-lg">Transaction volume processed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="gradient-card rounded-2xl p-8 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">100M+</div>
                <p className="text-muted-foreground text-lg">Active developers</p>
              </div>
            </div>
            <div className="text-center">
              <div className="gradient-card rounded-2xl p-8 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">71%+</div>
                <p className="text-muted-foreground text-lg">Faster than Ethereum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground mb-6">
              The blockchain engine supercharging all our products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful infrastructure that enables developers to build the next generation of decentralized applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: FeatureItem, index: number) => (
              <Card key={feature.title} className="gradient-card hover-lift border-0 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Supporting Teams Section */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground mb-6">
              Supporting top teams onchain
            </h2>
          </div>
          
          <div className="relative">
            <div className="gradient-card rounded-3xl p-12 max-w-4xl mx-auto text-center">
              <div className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                "Cilana's infrastructure has been instrumental in scaling our DeFi protocol to handle millions of transactions with lightning-fast speeds and minimal costs."
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">JD</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">John Doe</div>
                  <div className="text-muted-foreground">CTO, DeFi Protocol</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools Section */}
      <section className="w-full py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-primary/20 to-foreground"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-background mb-6">
              Developer tools
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your decentralized applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary/20 border-primary/30 text-background hover:bg-primary/30 transition-all duration-300 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-background/80 leading-relaxed">
                  Monitor your applications with real-time analytics, transaction insights, and performance metrics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/20 border-primary/30 text-background hover:bg-primary/30 transition-all duration-300 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Sandbox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-background/80 leading-relaxed">
                  Test your smart contracts in a secure environment before deploying to mainnet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground mb-8">
              Ready to build the future?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join thousands of developers building the next generation of decentralized applications on Cilana.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <Link href="/community">Get Started <ArrowRight className="ml-2 h-6 w-6" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
