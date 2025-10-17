export default function Card({ title, price, image, rating }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md text-center hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-48 object-contain mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-yellow-400 text-sm mt-1">
        ⭐ {rating?.rate ?? "N/A"} ({rating?.count ?? 0})
      </p>
      <p className="text-green-400 text-xl font-bold mt-2">${price}</p>
    </div>
  );
}
