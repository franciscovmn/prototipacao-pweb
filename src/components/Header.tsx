import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Snippex</span>
        </Link>
        
        <Link to="/add">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Adicionar Snippet
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
