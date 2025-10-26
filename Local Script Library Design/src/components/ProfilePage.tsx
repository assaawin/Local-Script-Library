import { Settings, Star, Download, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ScriptCard } from "./ScriptCard";
import { mockScripts } from "../data/mockData";

interface ProfilePageProps {
  onViewScript: (scriptId: string) => void;
}

export function ProfilePage({ onViewScript }: ProfilePageProps) {
  // Mock user data
  const user = {
    name: "Chidi Okonkwo",
    country: "Nigeria",
    flag: "🇳🇬",
    joinedDate: "September 2024",
    bio: "Full-stack developer passionate about improving African web experiences. Building scripts that solve real problems for Nigerian internet users.",
    role: "Creator",
  };

  // Filter user's scripts
  const userScripts = mockScripts.filter(
    (script) => script.author.name === "Chidi Okonkwo"
  );

  const stats = {
    totalScripts: userScripts.length,
    totalDownloads: userScripts.reduce((sum, script) => sum + script.downloads, 0),
    avgRating: userScripts.reduce((sum, script) => sum + script.rating, 0) / userScripts.length || 0,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2>{user.name}</h2>
                      <Badge variant="secondary">{user.role}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <span>{user.flag}</span>
                      <span>{user.country}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {user.joinedDate}</span>
                    </div>
                  </div>

                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6">{user.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl text-primary">{stats.totalScripts}</div>
                    <div className="text-sm text-muted-foreground">Scripts</div>
                  </div>
                  <div>
                    <div className="text-2xl text-primary">
                      {stats.totalDownloads.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </div>
                  <div>
                    <div className="text-2xl text-primary">{stats.avgRating.toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="scripts" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="scripts">My Scripts</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>

          <TabsContent value="scripts" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3>My Scripts ({userScripts.length})</h3>
              <Button variant="outline">
                Create New Script
              </Button>
            </div>

            {userScripts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userScripts.map((script) => (
                  <ScriptCard key={script.id} script={script} onViewDetails={onViewScript} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-12 pb-12 text-center">
                  <p className="text-muted-foreground">You haven't created any scripts yet.</p>
                  <Button className="mt-4">Create Your First Script</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <h3>Favorite Scripts</h3>
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">You haven't favorited any scripts yet.</p>
                <Button className="mt-4" variant="outline">
                  Browse Scripts
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="following" className="space-y-6">
            <h3>Following</h3>
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <p className="text-muted-foreground">You're not following any authors yet.</p>
                <Button className="mt-4" variant="outline">
                  Discover Authors
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
