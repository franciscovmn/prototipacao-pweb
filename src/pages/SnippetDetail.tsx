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
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="gap-2 mb-8 glass hover:glass-strong">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {snippet.title}
              </h1>
              <Badge variant="secondary" className="gap-1 glass-strong">
                <Code className="h-4 w-4" />
                {snippet.language}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Criado em {new Date(snippet.createdAt).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="glass-strong border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  ✨ Gerado pelo Gemini
                </CardTitle>
                <CardDescription className="text-base">
                  Análise automática e explicação do seu código
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-foreground leading-relaxed text-lg">
                  {snippet.aiExplanation}
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Código
              </h2>
              <CodeBlock code={snippet.code} language={snippet.language} />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {snippet.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm glass-strong">
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
