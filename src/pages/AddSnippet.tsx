import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const AddSnippet = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !language || !code) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha título, linguagem e código.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular chamada à API do Gemini (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Snippet salvo!",
      description: "Seu snippet foi analisado pela IA Gemini.",
    });

    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Novo Snippet
            </h1>
            <p className="text-muted-foreground text-lg">
              Adicione seu código e a IA irá gerar uma explicação automática ✨
            </p>
          </div>

          <Card className="glass-strong">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-primary" />
                Detalhes do Snippet
              </CardTitle>
              <CardDescription className="text-base">
                Preencha as informações do seu snippet de código
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base">Título *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: React useState Hook"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={isLoading}
                    className="glass h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language" className="text-base">Linguagem *</Label>
                  <Select value={language} onValueChange={setLanguage} disabled={isLoading}>
                    <SelectTrigger id="language" className="glass h-12">
                      <SelectValue placeholder="Selecione a linguagem" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong">
                      <SelectItem value="JavaScript">JavaScript</SelectItem>
                      <SelectItem value="TypeScript">TypeScript</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                      <SelectItem value="CSS">CSS</SelectItem>
                      <SelectItem value="Java">Java</SelectItem>
                      <SelectItem value="Go">Go</SelectItem>
                      <SelectItem value="Rust">Rust</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code" className="text-base">Código *</Label>
                  <Textarea
                    id="code"
                    placeholder="Cole seu código aqui..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    disabled={isLoading}
                    className="font-mono text-sm min-h-[300px] bg-code-bg border-code-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-base">Tags (opcional)</Label>
                  <Input
                    id="tags"
                    placeholder="react, hooks, state (separadas por vírgula)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    disabled={isLoading}
                    className="glass h-12"
                  />
                  <p className="text-sm text-muted-foreground">
                    Separe as tags por vírgula
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-semibold"
                  disabled={isLoading}
                >
                  <Sparkles className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? "Analisando com Gemini..." : "Salvar e Analisar com Gemini ✨"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AddSnippet;
