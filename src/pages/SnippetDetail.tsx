import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Code, Sparkles } from "lucide-react";
import { mockSnippets } from "@/lib/mockData";

const SnippetDetail = () => {
  const { id } = useParams();
  const snippet = mockSnippets.find(s => s.id === id);

  if (!snippet) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Snippet não encontrado</h1>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>

          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold">{snippet.title}</h1>
              <Badge variant="secondary" className="gap-1">
                <Code className="h-4 w-4" />
                {snippet.language}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Criado em {new Date(snippet.createdAt).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Explicação da IA
                </CardTitle>
                <CardDescription>
                  Análise automática do snippet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  {snippet.aiExplanation}
                </p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Código
              </h2>
              <CodeBlock code={snippet.code} language={snippet.language} />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {snippet.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SnippetDetail;
