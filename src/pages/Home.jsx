import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
 
const categorias = [
  { nome: "electronics", titulo: "Eletrônicos" },
  { nome: "jewelery", titulo: "Joias" },
  { nome: "men's clothing", titulo: "Roupas Masculinas" },
];
 
export default function Home() {
  const [produtos, setProdutos] = useState({});
 
  useEffect(() => {
    categorias.forEach((cat) => {
      fetch(`${import.meta.env.VITE_API_URL}/products/category/${cat.nome}`)
        .then((res) => res.json())
        .then((data) => {
          setProdutos((prev) => ({ ...prev, [cat.nome]: data }));
        });
    });
  }, []);
 
  return (
    <div>
      {categorias.map((cat) => (
        <section key={cat.nome} className="mb-8">
          <div className="bg-blue-900 rounded p-4 mb-4">
            <h3 className="text-xl font-bold">{cat.titulo}</h3>
            <p className="text-sm">Produtos em destaque</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {(produtos[cat.nome] || []).slice(0, 4).map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}