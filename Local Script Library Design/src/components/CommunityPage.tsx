import { Users, TrendingUp, Award, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function CommunityPage() {
  const topContributors = [
    { name: "Chidi Okonkwo", country: "Nigeria", flag: "🇳🇬", scripts: 12, downloads: 45000 },
    { name: "Wanjiku Maina", country: "Kenya", flag: "🇰🇪", scripts: 8, downloads: 38000 },
    { name: "Thabo Ndlovu", country: "South Africa", flag: "🇿🇦", scripts: 15, downloads: 62000 },
    { name: "Kwesi Mensah", country: "Ghana", flag: "🇬🇭", scripts: 6, downloads: 28000 },
  ];

  const recentDiscussions = [
    {
      title: "Best practices for banking scripts security",
      author: "Amina K.",
      replies: 23,
      category: "Security",
    },
    {
      title: "Request: Script for Nigerian government portals",
      author: "Emmanuel O.",
      replies: 8,
      category: "Requests",
    },
    {
      title: "How to handle dynamic content loading?",
      author: "Sarah M.",
      replies: 15,
      category: "Help",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Community</h1>
          <p className="text-muted-foreground">
            Connect with developers and users across Africa
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl">45K+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl">5.2K+</div>
                  <div className="text-sm text-muted-foreground">Scripts</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl">234</div>
                  <div className="text-sm text-muted-foreground">Contributors</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl">1.2K</div>
                  <div className="text-sm text-muted-foreground">Discussions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div
                  key={contributor.name}
                  className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {contributor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span>{contributor.name}</span>
                        <span>{contributor.flag}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {contributor.scripts} scripts • {contributor.downloads.toLocaleString()} downloads
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              ))}

              <Button variant="ghost" className="w-full">
                View All Contributors
              </Button>
            </CardContent>
          </Card>

          {/* Recent Discussions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Discussions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <div
                  key={discussion.title}
                  className="p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="line-clamp-1">{discussion.title}</h4>
                    <Badge variant="outline" className="shrink-0">
                      {discussion.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>by {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.replies} replies</span>
                  </div>
                </div>
              ))}

              <Button variant="ghost" className="w-full">
                View All Discussions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-0">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="mb-4">Join the Community</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with developers, share your knowledge, and help build better scripts for African users
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start a Discussion
              </Button>
              <Button size="lg" variant="outline">
                View Guidelines
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
