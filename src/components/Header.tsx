import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Plus, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const userStr = localStorage.getItem("snippex_user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserName(user.name || "Usuário");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("snippex_user");
    navigate("/login");
  };

  return (
    <header className="border-b border-border/50 glass-strong sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Code2 className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground">Snippex</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Link to="/new">
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Adicionar Snippet</span>
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Olá, {userName}</span>
          </div>

          <Button variant="ghost" size="icon" onClick={handleLogout} className="hover:text-destructive">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
