export interface Snippet {
  id: string;
  title: string;
  language: string;
  code: string;
  tags: string[];
  aiExplanation: string;
  createdAt: string;
}

export const mockSnippets: Snippet[] = [
  {
    id: "1",
    title: "React useState Hook",
    language: "JavaScript",
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`,
    tags: ["react", "hooks", "state"],
    aiExplanation: "Este snippet demonstra o uso do hook useState do React para gerenciar estado local em componentes funcionais. O hook retorna um par de valores: o estado atual e uma função para atualizá-lo.",
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    title: "Python List Comprehension",
    language: "Python",
    code: `# Criar uma lista de quadrados
squares = [x**2 for x in range(10)]

# Filtrar números pares
evens = [x for x in range(20) if x % 2 == 0]

# Nested list comprehension
matrix = [[j for j in range(5)] for i in range(3)]`,
    tags: ["python", "list-comprehension", "basics"],
    aiExplanation: "List comprehension é uma forma concisa e elegante de criar listas em Python. Oferece uma sintaxe mais limpa comparada aos loops tradicionais, combinando criação de lista, transformação e filtragem em uma única linha.",
    createdAt: "2024-01-14"
  },
  {
    id: "3",
    title: "CSS Flexbox Center",
    language: "CSS",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.centered-content {
  /* O conteúdo aqui será centralizado 
     tanto horizontal quanto verticalmente */
}`,
    tags: ["css", "flexbox", "layout"],
    aiExplanation: "Este snippet mostra como centralizar elementos usando Flexbox. O display flex ativa o modelo flexbox, enquanto justify-content e align-items centralizam o conteúdo nos eixos horizontal e vertical respectivamente.",
    createdAt: "2024-01-13"
  },
  {
    id: "4",
    title: "Async/Await API Call",
    language: "JavaScript",
    code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}`,
    tags: ["javascript", "async", "api", "fetch"],
    aiExplanation: "Este código demonstra o uso de async/await para fazer chamadas de API assíncronas de forma mais legível. O try-catch lida com erros de forma elegante, e o código aguarda a resposta antes de processar os dados.",
    createdAt: "2024-01-12"
  },
  {
    id: "5",
    title: "TypeScript Interface",
    language: "TypeScript",
    code: `interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // propriedade opcional
  readonly createdAt: Date; // readonly
}

function greetUser(user: User): string {
  return \`Olá, \${user.name}!\`;
}

const newUser: User = {
  id: 1,
  name: "João Silva",
  email: "joao@example.com",
  createdAt: new Date()
};`,
    tags: ["typescript", "interface", "types"],
    aiExplanation: "Interfaces em TypeScript definem a estrutura de objetos, fornecendo type safety. Este exemplo mostra propriedades opcionais (?) e readonly, além de como usar a interface em parâmetros de função.",
    createdAt: "2024-01-11"
  },
  {
    id: "6",
    title: "Python Decorator",
    language: "Python",
    code: `import time
from functools import wraps

def timing_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} levou {end_time - start_time:.2f}s")
        return result
    return wrapper

@timing_decorator
def slow_function():
    time.sleep(2)
    return "Concluído"`,
    tags: ["python", "decorator", "performance"],
    aiExplanation: "Decorators em Python são uma forma poderosa de modificar o comportamento de funções. Este decorator mede o tempo de execução de qualquer função, demonstrando como adicionar funcionalidade sem modificar o código original.",
    createdAt: "2024-01-10"
  }
];
