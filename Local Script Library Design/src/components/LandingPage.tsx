import { ArrowRight, Code2, Shield, Users, TrendingUp, CheckCircle2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { ScriptCard } from "./ScriptCard";
import { featuredScripts, stats } from "../data/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onNavigate: (page: string) => void;
  onViewScript: (scriptId: string) => void;
}

export function LandingPage({ onNavigate, onViewScript }: LandingPageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="bg-accent text-accent-foreground border-0 px-4 py-1">
                  🌍 Built for Africa, by Africans
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                Find Scripts for Your Local Web
              </h1>
              <p className="text-xl text-muted-foreground">
                A community-driven platform for discovering and sharing userscripts that enhance African websites and solve local digital challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => onNavigate("browse")} className="bg-primary hover:bg-primary/90">
                  Browse Library
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate("submit")}>
                  Submit a Script
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                <div>
                  <div className="text-2xl text-primary">{stats.totalScripts.toLocaleString()}+</div>
                  <div className="text-sm text-muted-foreground">Scripts</div>
                </div>
                <div>
                  <div className="text-2xl text-primary">{stats.countries}+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl text-primary">{(stats.downloads / 1000000).toFixed(1)}M+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl text-primary">{(stats.activeUsers / 1000).toFixed(0)}K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1657448740120-001a2345ab81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVjaG5vbG9neSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzYxNDg4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="African tech community"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-background border rounded-lg shadow-lg p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">This Week</div>
                    <div>+234 New Scripts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for scripts, websites, or categories..."
                  className="pl-10 h-12"
                  onFocus={() => onNavigate("browse")}
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => onNavigate("browse")}>
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Scripts */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Scripts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and trusted scripts from our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredScripts.map((script) => (
            <ScriptCard key={script.id} script={script} onViewDetails={onViewScript} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={() => onNavigate("browse")}>
            View All Scripts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with userscripts in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3>1. Find Your Script</h3>
                <p className="text-muted-foreground">
                  Browse our library or search for scripts that enhance your favorite local websites
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Code2 className="h-8 w-8 text-secondary" />
                </div>
                <h3>2. Install Extension</h3>
                <p className="text-muted-foreground">
                  Install Tampermonkey or Greasemonkey browser extension if you haven't already
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3>3. Enhance & Enjoy</h3>
                <p className="text-muted-foreground">
                  Click install on any script and enjoy an enhanced browsing experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623412912058-4e4552dbc10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE0ODg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community collaboration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2>Join Our Growing Community</h2>
            <p className="text-muted-foreground">
              Local Script Library is built by African developers, for African users. We believe in the power of community collaboration to solve local digital challenges.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Verified Scripts</h4>
                  <p className="text-sm text-muted-foreground">
                    Community-vetted and moderator-approved scripts for your safety
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4>Active Contributors</h4>
                  <p className="text-sm text-muted-foreground">
                    Join thousands of developers sharing their solutions
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4>Open Source</h4>
                  <p className="text-sm text-muted-foreground">
                    All scripts are open and transparent for community review
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={() => onNavigate("submit")} className="bg-secondary hover:bg-secondary/90">
              Start Contributing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${className}`}>
      {children}
    </span>
  );
}
