import { Star, Download, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Script } from "../data/mockData";

interface ScriptCardProps {
  script: Script;
  onViewDetails: (scriptId: string) => void;
}

export function ScriptCard({ script, onViewDetails }: ScriptCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onViewDetails(script.id)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="mb-1 truncate">{script.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{script.author.flag}</span>
              <span>{script.author.name}</span>
            </div>
          </div>
          {script.verified && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground shrink-0">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{script.description}</p>

        <div className="flex flex-wrap gap-1">
          {script.targetWebsites.slice(0, 2).map((site) => (
            <Badge key={site} variant="outline" className="text-xs">
              <ExternalLink className="h-3 w-3 mr-1" />
              {site}
            </Badge>
          ))}
          {script.targetWebsites.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{script.targetWebsites.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>{script.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>{script.downloads.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(script.id);
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
