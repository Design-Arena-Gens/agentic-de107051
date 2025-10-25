export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Timeless <span className="text-gold">Luxury</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover our curated collection of the world's most prestigious timepieces.
          Each watch tells a story of craftsmanship, precision, and elegance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gold text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition">
            Explore Collection
          </button>
          <button className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
