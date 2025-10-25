interface HeaderProps {
  cartItemCount: number
  onCartClick: () => void
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" strokeWidth="2"/>
            <line x1="12" y1="12" x2="12" y2="6" strokeWidth="2"/>
            <line x1="12" y1="12" x2="15" y2="15" strokeWidth="2"/>
          </svg>
          <h1 className="text-2xl font-bold text-gold">Chronos Elite</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-gold transition">Collection</a>
          <a href="#" className="text-gray-300 hover:text-gold transition">Brands</a>
          <a href="#" className="text-gray-300 hover:text-gold transition">About</a>
          <a href="#" className="text-gray-300 hover:text-gold transition">Contact</a>
        </nav>

        <button
          onClick={onCartClick}
          className="relative bg-gold/10 hover:bg-gold/20 text-gold px-4 py-2 rounded-lg transition flex items-center space-x-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
