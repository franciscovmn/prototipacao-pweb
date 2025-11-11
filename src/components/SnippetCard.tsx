import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

interface SnippetCardProps {
  id: string;
  title: string;
  language: string;
  preview: string;
  tags?: string[];
}

const SnippetCard = ({ id, title, language, preview, tags }: SnippetCardProps) => {
  return (
    <Link to={`/snippet/${id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer border-border bg-gradient-to-b from-card to-card/50">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-semibold line-clamp-2">{title}</CardTitle>
            <Badge variant="secondary" className="shrink-0 gap-1">
              <Code className="h-3 w-3" />
              {language}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="bg-code-bg border border-code-border rounded-lg p-3 overflow-hidden text-xs font-mono text-foreground/80">
            <code className="line-clamp-3">{preview}</code>
          </pre>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default SnippetCard;
