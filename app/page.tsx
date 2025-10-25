'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WatchGrid from './components/WatchGrid'
import WatchDetail from './components/WatchDetail'
import Cart from './components/Cart'
import Footer from './components/Footer'

export interface Watch {
  id: number
  name: string
  brand: string
  price: number
  image: string
  description: string
  features: string[]
  movement: string
  caseMaterial: string
  waterResistance: string
}

export interface CartItem extends Watch {
  quantity: number
}

export default function Home() {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const watches: Watch[] = [
    {
      id: 1,
      name: 'Royal Oak Offshore',
      brand: 'Audemars Piguet',
      price: 32500,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop',
      description: 'An iconic luxury sports watch with bold design and exceptional craftsmanship.',
      features: ['Chronograph', 'Date Display', 'Sapphire Crystal', 'Luminous Hands'],
      movement: 'Automatic Caliber 3126/3840',
      caseMaterial: 'Stainless Steel',
      waterResistance: '100m',
    },
    {
      id: 2,
      name: 'Submariner Date',
      brand: 'Rolex',
      price: 14250,
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&h=800&fit=crop',
      description: 'The ultimate dive watch with unmatched reliability and timeless elegance.',
      features: ['Rotating Bezel', 'Date Window', 'Cerachrom Insert', 'Glidelock Clasp'],
      movement: 'Perpetual Caliber 3235',
      caseMaterial: '904L Stainless Steel',
      waterResistance: '300m',
    },
    {
      id: 3,
      name: 'Nautilus 5711',
      brand: 'Patek Philippe',
      price: 52000,
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=800&fit=crop',
      description: 'The pinnacle of luxury sports watches, combining elegance with sporty sophistication.',
      features: ['Date Display', 'Sweep Seconds', 'Sapphire Crystal', 'Integrated Bracelet'],
      movement: 'Caliber 26-330 S C',
      caseMaterial: 'Stainless Steel',
      waterResistance: '120m',
    },
    {
      id: 4,
      name: 'Speedmaster Professional',
      brand: 'Omega',
      price: 6800,
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&h=800&fit=crop',
      description: 'The legendary Moonwatch, first watch worn on the moon. A true icon of space exploration.',
      features: ['Chronograph', 'Tachymeter', 'Hesalite Crystal', 'Manual Winding'],
      movement: 'Caliber 1861',
      caseMaterial: 'Stainless Steel',
      waterResistance: '50m',
    },
    {
      id: 5,
      name: 'Daytona',
      brand: 'Rolex',
      price: 38500,
      image: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&h=800&fit=crop',
      description: 'The ultimate racing chronograph, designed for professional drivers and motorsport enthusiasts.',
      features: ['Chronograph', 'Tachymeter Bezel', 'Oyster Case', 'Cerachrom Bezel'],
      movement: 'Perpetual Caliber 4130',
      caseMaterial: '904L Stainless Steel',
      waterResistance: '100m',
    },
    {
      id: 6,
      name: 'Seamaster Diver 300M',
      brand: 'Omega',
      price: 5900,
      image: 'https://images.unsplash.com/photo-1611485988697-4ff1e4101327?w=800&h=800&fit=crop',
      description: 'A professional dive watch with cutting-edge technology and stunning design.',
      features: ['Helium Escape Valve', 'Ceramic Bezel', 'Date Display', 'Luminous Markers'],
      movement: 'Co-Axial Caliber 8800',
      caseMaterial: 'Stainless Steel',
      waterResistance: '300m',
    },
    {
      id: 7,
      name: 'Santos de Cartier',
      brand: 'Cartier',
      price: 8200,
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&h=800&fit=crop',
      description: 'A pioneering aviation watch with distinctive square case and elegant Roman numerals.',
      features: ['Date Display', 'QuickSwitch System', 'Sapphire Crystal', 'Roman Numerals'],
      movement: 'Caliber 1847 MC',
      caseMaterial: 'Stainless Steel',
      waterResistance: '100m',
    },
    {
      id: 8,
      name: 'Big Bang Unico',
      brand: 'Hublot',
      price: 19800,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=800&fit=crop',
      description: 'Bold contemporary design meets innovative materials and in-house chronograph movement.',
      features: ['Chronograph', 'Skeleton Dial', 'Ceramic Bezel', 'Rubber Strap'],
      movement: 'HUB1242 Unico',
      caseMaterial: 'Titanium',
      waterResistance: '100m',
    },
  ]

  const addToCart = (watch: Watch) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === watch.id)
      if (existing) {
        return prev.map(item =>
          item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...watch, quantity: 1 }]
    })
  }

  const removeFromCart = (watchId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== watchId))
  }

  const updateQuantity = (watchId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(watchId)
      return
    }
    setCartItems(prev =>
      prev.map(item => (item.id === watchId ? { ...item, quantity } : item))
    )
  }

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header cartItemCount={cartItemCount} onCartClick={() => setShowCart(true)} />

      {!selectedWatch && (
        <>
          <Hero />
          <WatchGrid watches={watches} onWatchClick={setSelectedWatch} onAddToCart={addToCart} />
        </>
      )}

      {selectedWatch && (
        <WatchDetail
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      )}

      <Footer />
    </div>
  )
}
