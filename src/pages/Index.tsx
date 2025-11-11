import { useState } from "react";
import Header from "@/components/Header";
import SnippetCard from "@/components/SnippetCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { mockSnippets } from "@/lib/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSnippets = mockSnippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    snippet.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Seus Snippets de Código
          </h1>
          <p className="text-muted-foreground text-lg">
            Organize e gerencie seus snippets com IA ✨
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative glass-strong rounded-2xl p-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              type="text"
              placeholder="Buscar em Meus Snippets..."
              className="pl-12 h-14 text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredSnippets.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum snippet encontrado. Tente outra busca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                id={snippet.id}
                title={snippet.title}
                language={snippet.language}
                preview={snippet.code}
                tags={snippet.tags}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
