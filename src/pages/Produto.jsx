import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
 
export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
        setLoading(false);
      });
  }, [id]);
 
  if (loading) return <p>Carregando...</p>;
  if (!produto) return <p>Produto não encontrado.</p>;
 
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <img src={produto.image} alt={produto.title} className="h-48 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{produto.title}</h2>
      <p className="mb-2">{produto.description}</p>
      <p className="font-bold text-lg mb-2">R$ {produto.price}</p>
      <p className="flex items-center gap-1">Avaliação: {produto.rating?.rate} <span></span></p>
    </div>
  );
}