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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !language || !code) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha título, linguagem e código.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Snippet salvo!",
      description: "Seu snippet foi salvo e analisado pela IA.",
    });

    // Simular redirecionamento para a página de detalhes
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Novo Snippet</h1>
            <p className="text-muted-foreground">
              Adicione seu código e a IA irá gerar uma explicação automática
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Detalhes do Snippet
              </CardTitle>
              <CardDescription>
                Preencha as informações do seu snippet de código
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: React useState Hook"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Linguagem *</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Selecione a linguagem" />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Label htmlFor="code">Código *</Label>
                  <Textarea
                    id="code"
                    placeholder="Cole seu código aqui..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="font-mono text-sm min-h-[300px] bg-code-bg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (opcional)</Label>
                  <Input
                    id="tags"
                    placeholder="react, hooks, state (separadas por vírgula)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Separe as tags por vírgula
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Salvar e Analisar com IA
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
