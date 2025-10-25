import { Watch } from '../page'

interface WatchGridProps {
  watches: Watch[]
  onWatchClick: (watch: Watch) => void
  onAddToCart: (watch: Watch) => void
}

export default function WatchGrid({ watches, onWatchClick, onAddToCart }: WatchGridProps) {
  return (
    <section className="px-6 pb-20">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Featured Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="bg-slate-800/50 backdrop-blur rounded-xl overflow-hidden border border-slate-700 hover:border-gold/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div onClick={() => onWatchClick(watch)}>
                <div className="aspect-square bg-slate-700/50 overflow-hidden">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold text-sm font-semibold mb-1">{watch.brand}</p>
                  <h4 className="text-white text-lg font-bold mb-2">{watch.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{watch.movement}</p>
                  <p className="text-2xl font-bold text-gold">${watch.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onAddToCart(watch)
                  }}
                  className="w-full bg-gold text-slate-900 py-2 rounded-lg font-semibold hover:bg-gold/90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
