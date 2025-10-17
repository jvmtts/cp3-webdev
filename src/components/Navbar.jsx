import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
          <Link to="/" className="text-black hover:underline">Home</Link>
        <Link to="/Perfil" className="text-black hover:underline">Perfil</Link>
        <Link to="/Carrinho" className="text-black hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}
