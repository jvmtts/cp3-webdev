export default function Section({ titulo, subtitulo, children }) {
  return (
    <section className="mb-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <p className="text-gray-400">{subtitulo}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
}
