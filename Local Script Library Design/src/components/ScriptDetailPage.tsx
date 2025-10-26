import { useState } from "react";
import { ArrowLeft, Download, Star, Shield, ExternalLink, Flag, Code2, Eye, EyeOff, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { mockScripts } from "../data/mockData";
import type { Script } from "../data/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ScriptDetailPageProps {
  scriptId: string;
  onBack: () => void;
}

export function ScriptDetailPage({ scriptId, onBack }: ScriptDetailPageProps) {
  const script = mockScripts.find((s) => s.id === scriptId);
  const [showCode, setShowCode] = useState(false);

  if (!script) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h2>Script not found</h2>
          <Button onClick={onBack} className="mt-4">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Browse
      </Button>

      {/* Header */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Author */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1>{script.name}</h1>
              {script.verified && (
                <Badge className="bg-accent text-accent-foreground shrink-0">
                  <Shield className="h-4 w-4 mr-1" />
                  Verified
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {script.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span>{script.author.name}</span>
                    <span>{script.author.flag}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{script.author.country}</div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span>{script.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({script.reviews.length} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="h-4 w-4" />
                <span>{script.downloads.toLocaleString()} downloads</span>
              </div>
              <Badge variant="outline">{script.category}</Badge>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="mb-3">About this script</h3>
            <p className="text-muted-foreground">{script.longDescription}</p>
          </div>

          {/* Target Websites */}
          <div>
            <h3 className="mb-3">Works on</h3>
            <div className="flex flex-wrap gap-2">
              {script.targetWebsites.map((site) => (
                <Badge key={site} variant="outline" className="text-sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  {site}
                </Badge>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          {script.screenshots && script.screenshots.length > 0 && (
            <div>
              <h3 className="mb-3">Screenshots</h3>
              <div className="grid gap-4">
                {script.screenshots.map((screenshot, idx) => (
                  <ImageWithFallback
                    key={idx}
                    src={screenshot}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full rounded-lg border"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Code View */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3>Source Code</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-2" />
                    Hide Code
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-2" />
                    View Code
                  </>
                )}
              </Button>
            </div>

            {showCode && (
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>{script.code}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Reviews */}
          <div>
            <h3 className="mb-4">Reviews</h3>
            {script.reviews.length > 0 ? (
              <div className="space-y-4">
                {script.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {review.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{review.author}</span>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating
                                      ? "fill-accent text-accent"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {review.comment}
                          </p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Install Card */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Download className="h-5 w-5 mr-2" />
                Install Script
              </Button>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span>1.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Updated</span>
                  <span>{new Date(script.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">License</span>
                  <span>MIT</span>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-2">Compatibility</h4>
                <div className="flex flex-wrap gap-2">
                  {script.compatibility.map((comp) => (
                    <Badge key={comp} variant="secondary">
                      {comp}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4>Installation Instructions</h4>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Install Tampermonkey extension</li>
                  <li>Click the "Install Script" button</li>
                  <li>Review the code and click "Install"</li>
                  <li>Visit the target website</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Report Card */}
          <Card>
            <CardContent className="pt-6">
              <Button variant="outline" className="w-full" size="sm">
                <Flag className="h-4 w-4 mr-2" />
                Report Script
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Report issues, bugs, or security concerns
              </p>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardContent className="pt-6">
              <h4 className="mb-4">Statistics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Downloads this week</span>
                  <span>+234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active installations</span>
                  <span>{Math.floor(script.downloads * 0.7).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Created</span>
                  <span>{new Date(script.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
