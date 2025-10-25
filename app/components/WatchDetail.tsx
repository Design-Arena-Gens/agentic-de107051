import { Watch } from '../page'

interface WatchDetailProps {
  watch: Watch
  onClose: () => void
  onAddToCart: (watch: Watch) => void
}

export default function WatchDetail({ watch, onClose, onAddToCart }: WatchDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="bg-slate-800 rounded-2xl max-w-6xl w-full border border-gold/20 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square bg-slate-700/50 rounded-xl overflow-hidden">
              <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-gold text-lg font-semibold mb-2">{watch.brand}</p>
              <h2 className="text-4xl font-bold text-white mb-4">{watch.name}</h2>
              <p className="text-gray-300 text-lg mb-6">{watch.description}</p>

              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gold mb-4">Specifications</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Movement:</span>
                    <span className="font-semibold">{watch.movement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Case Material:</span>
                    <span className="font-semibold">{watch.caseMaterial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Water Resistance:</span>
                    <span className="font-semibold">{watch.waterResistance}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gold mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {watch.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6 mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-gold">${watch.price.toLocaleString()}</span>
                  <span className="text-gray-400">Free Shipping</span>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(watch)
                    onClose()
                  }}
                  className="w-full bg-gold text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
