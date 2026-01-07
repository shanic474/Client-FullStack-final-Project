import { useState } from 'react'
import Navbar from '../../components/Navbar'

function HomePage() {
  const [selectedIngredients, setSelectedIngredients] = useState([
    { id: 1, name: 'Quinoa', calories: 222, protein: 8, carbs: 39, fat: 4, price: 3.49 },
    { id: 2, name: 'Grilled Chicken', calories: 165, protein: 31, carbs: 0, fat: 4, price: 4.99 },
  ])

  // Calculate totals
  const totalCalories = selectedIngredients.reduce((sum, ing) => sum + ing.calories, 0)
  const totalProtein = selectedIngredients.reduce((sum, ing) => sum + ing.protein, 0)
  const totalCarbs = selectedIngredients.reduce((sum, ing) => sum + ing.carbs, 0)
  const totalFat = selectedIngredients.reduce((sum, ing) => sum + ing.fat, 0)
  const totalPrice = selectedIngredients.reduce((sum, ing) => sum + ing.price, 0)

  // Sample data
  const popularIngredients = [
    { id: 1, name: 'Grilled Chicken', calories: 165, protein: 31, carbs: 0, fat: 4, price: 4.99, image: '🍗', healthy: true },
    { id: 2, name: 'Salmon Fillet', calories: 206, protein: 22, carbs: 0, fat: 12, price: 7.99, image: '🐟', healthy: true },
    { id: 3, name: 'Quinoa', calories: 222, protein: 8, carbs: 39, fat: 4, price: 3.49, image: '🌾', healthy: true },
    { id: 4, name: 'Avocado', calories: 234, protein: 3, carbs: 12, fat: 21, price: 2.99, image: '🥑', healthy: true },
    { id: 5, name: 'Brown Rice', calories: 216, protein: 5, carbs: 45, fat: 2, price: 2.49, image: '🍚', healthy: true },
    { id: 6, name: 'Sweet Potato', calories: 103, protein: 2, carbs: 24, fat: 0, price: 1.99, image: '🍠', healthy: true },
  ]

  const featuredMeals = [
    {
      id: 1,
      name: 'Mediterranean Bowl',
      calories: 485,
      protein: 35,
      carbs: 42,
      fat: 18,
      price: 12.99,
      optimizedPrice: 10.49,
      image: '🥗',
      ingredients: ['Quinoa', 'Grilled Chicken', 'Feta Cheese', 'Olives', 'Cucumber']
    },
    {
      id: 2,
      name: 'Protein Power Bowl',
      calories: 520,
      protein: 42,
      carbs: 38,
      fat: 22,
      price: 14.99,
      optimizedPrice: 12.99,
      image: '💪',
      ingredients: ['Brown Rice', 'Salmon', 'Avocado', 'Edamame', 'Spinach']
    },
    {
      id: 3,
      name: 'Veggie Delight',
      calories: 380,
      protein: 18,
      carbs: 52,
      fat: 12,
      price: 10.99,
      optimizedPrice: 8.99,
      image: '🥬',
      ingredients: ['Sweet Potato', 'Chickpeas', 'Kale', 'Carrots', 'Tahini']
    },
  ]

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '👩',
      quote: 'The real-time macro tracking is incredible! I can see exactly how my meal changes as I add ingredients.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '👨',
      quote: 'The healthier alternative suggestions saved me 200 calories without sacrificing taste. Brilliant feature!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: '👩‍🦰',
      quote: 'Price optimization helped me save $15 this week while still hitting my protein goals. Love it!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: '👨‍💼',
      quote: 'As a fitness coach, I recommend this to all my clients. The macro breakdown is spot-on.',
      rating: 5
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white transition-colors duration-500">
      <Navbar />
      
      {/* Hero Section - Luxury Restaurant Style */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-amber-950/10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              {/* Elegant badge */}
              <div className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-amber-400 text-xs font-light tracking-[0.2em] uppercase">Macro & Nutrition Laboratory</span>
              </div>
              
              {/* Main headline - Luxury typography */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1] tracking-wide uppercase">
                Craft Your
                <br />
                <span className="font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Perfect Meal
                </span>
              </h1>
              
              {/* Subheadline - Scientific elegance */}
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-light max-w-2xl">
                Precision nutrition tracking with <span className="text-amber-400">real-time macro calculations</span>, 
                intelligent <span className="text-amber-400">price optimization</span>, and 
                <span className="text-amber-400"> health-conscious alternatives</span>.
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap gap-8 mb-12 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <span>Real-time calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <span>Price optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <span>Healthier suggestions</span>
                </div>
              </div>
              
              {/* CTA Buttons - Luxury style */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group px-10 py-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 text-amber-300 rounded-sm font-light text-sm tracking-wider uppercase hover:from-amber-500/30 hover:to-yellow-500/30 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-sm">
                  <span className="flex items-center justify-center gap-3">
                    Begin Experience
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="px-10 py-4 border border-gray-700 text-gray-400 rounded-sm font-light text-sm tracking-wider uppercase hover:border-amber-500/40 hover:text-amber-400 transition-all duration-500">
                  Explore Collection
                </button>
              </div>
            </div>
            
            {/* Live Macro Tracker - Scientific/Luxury Design */}
            <div className="relative animate-float">
              <div className="relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 rounded-sm p-10 border border-amber-500/20 shadow-2xl backdrop-blur-xl">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/40"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/40"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/40"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/40"></div>
                
                <div className="mb-8 pb-6 border-b border-amber-500/20">
                  <h3 className="text-sm font-light tracking-[0.3em] uppercase text-amber-400 mb-2">Live Analysis</h3>
                  <p className="text-xs text-gray-500 font-light">Real-time Macro Tracker</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {selectedIngredients.map((ing) => (
                    <div key={ing.id} className="flex items-center justify-between p-4 bg-[#1a1a1a]/50 border border-gray-800 rounded-sm">
                      <span className="text-white font-light text-sm">{ing.name}</span>
                      <span className="text-amber-400 text-xs font-light">{ing.calories} cal</span>
                    </div>
                  ))}
                </div>
                
                {/* Scientific data grid */}
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-amber-500/20">
                  <div className="p-4 bg-[#1a1a1a]/30 border border-gray-800 rounded-sm">
                    <div className="text-3xl font-light text-white mb-1">{totalCalories}</div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Calories</div>
                  </div>
                  <div className="p-4 bg-[#1a1a1a]/30 border border-gray-800 rounded-sm">
                    <div className="text-3xl font-light text-amber-400 mb-1">{totalProtein}g</div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Protein</div>
                  </div>
                  <div className="p-4 bg-[#1a1a1a]/30 border border-gray-800 rounded-sm">
                    <div className="text-3xl font-light text-amber-400 mb-1">{totalCarbs}g</div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Carbs</div>
                  </div>
                  <div className="p-4 bg-[#1a1a1a]/30 border border-gray-800 rounded-sm">
                    <div className="text-3xl font-light text-amber-400 mb-1">{totalFat}g</div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Fat</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-amber-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs font-light uppercase tracking-wide">Total Investment</span>
                    <span className="text-2xl font-light text-amber-400">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section - Luxury Presentation */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] via-gray-950 to-[#1a1a1a] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
              <span className="text-amber-400 text-xs font-light tracking-[0.3em] uppercase">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide uppercase">
              Precision
              <span className="font-light text-amber-400"> Engineering</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Advanced algorithms for optimal nutrition and value
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Real-time Calculations */}
            <div className="group relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
              
              <div className="mb-6">
                <div className="text-5xl mb-6 text-amber-400/60">📊</div>
                <div className="text-xs text-amber-400/60 font-light tracking-[0.3em] uppercase mb-4">Feature 01</div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide uppercase">Real-Time Analysis</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm mb-8">
                  Instant macro calculations update as you build. Every ingredient, every change, tracked with precision.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#1a1a1a]/50 border border-gray-800 text-gray-400 text-xs font-light rounded-sm">Calories</span>
                <span className="px-3 py-1.5 bg-[#1a1a1a]/50 border border-gray-800 text-gray-400 text-xs font-light rounded-sm">Protein</span>
                <span className="px-3 py-1.5 bg-[#1a1a1a]/50 border border-gray-800 text-gray-400 text-xs font-light rounded-sm">Carbs</span>
                <span className="px-3 py-1.5 bg-[#1a1a1a]/50 border border-gray-800 text-gray-400 text-xs font-light rounded-sm">Fats</span>
              </div>
            </div>

            {/* Price Optimization */}
            <div className="group relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
              
              <div className="mb-6">
                <div className="text-5xl mb-6 text-amber-400/60">💰</div>
                <div className="text-xs text-amber-400/60 font-light tracking-[0.3em] uppercase mb-4">Feature 02</div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide uppercase">Value Optimization</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm mb-8">
                  Intelligent algorithms find optimal ingredient combinations to maximize nutrition while minimizing cost.
                </p>
              </div>
              <div className="bg-[#1a1a1a]/50 border border-gray-800 p-5 rounded-sm">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-800">
                  <span className="text-gray-500 text-xs font-light uppercase">Original</span>
                  <span className="text-gray-600 line-through text-sm">$14.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-light text-sm">Optimized</span>
                  <span className="text-amber-400 font-light text-xl">$12.49</span>
                </div>
              </div>
            </div>

            {/* Healthier Suggestions */}
            <div className="group relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
              
              <div className="mb-6">
                <div className="text-5xl mb-6 text-amber-400/60">💡</div>
                <div className="text-xs text-amber-400/60 font-light tracking-[0.3em] uppercase mb-4">Feature 03</div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide uppercase">Health Intelligence</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm mb-8">
                  Receive intelligent suggestions for healthier alternatives that maintain flavor while improving nutrition.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <span className="text-amber-400">→</span>
                  <span>White Rice</span>
                  <span className="text-amber-400 ml-auto">→ Brown Rice</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-light">
                  <span className="text-amber-400">→</span>
                  <span>Regular Cheese</span>
                  <span className="text-amber-400 ml-auto">→ Low-Fat Feta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Elegant Process */}
      <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
              <span className="text-amber-400 text-xs font-light tracking-[0.3em] uppercase">Methodology</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide uppercase">
              The
              <span className="font-light text-amber-400"> Process</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Four refined steps to culinary perfection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select Ingredients', icon: '🌾', description: 'Curated ingredient library with complete nutritional profiles', color: 'amber' },
              { step: '02', title: 'Monitor Macros', icon: '📊', description: 'Real-time calculation of calories, protein, carbs, and fats', color: 'amber' },
              { step: '03', title: 'Receive Intelligence', icon: '💡', description: 'Smart suggestions for healthier alternatives and optimization', color: 'amber' },
              { step: '04', title: 'Preserve & Order', icon: '💾', description: 'Save your creation and reorder with a single action', color: 'amber' },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
                
                <div className="text-6xl mb-8 text-amber-400/40">{item.icon}</div>
                <div className="text-xs text-amber-400/60 font-light tracking-[0.3em] uppercase mb-4">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide uppercase">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Ingredients Section - Premium Display */}
      <section id="ingredients" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] via-gray-950 to-[#1a1a1a] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
              <span className="text-amber-400 text-xs font-light tracking-[0.3em] uppercase">Collection</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide uppercase">
              Premium
              <span className="font-light text-amber-400"> Ingredients</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Each ingredient meticulously cataloged with complete nutritional data
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularIngredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="group bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
                
                <div className="text-8xl mb-8 text-center text-amber-400/20">{ingredient.image}</div>
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-amber-500/20">
                  <h3 className="text-2xl font-light text-white tracking-wide uppercase">{ingredient.name}</h3>
                  {ingredient.healthy && (
                    <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-light px-3 py-1.5 rounded-sm uppercase tracking-wide">
                      Premium
                    </span>
                  )}
                </div>
                
                {/* Scientific data grid */}
                <div className="grid grid-cols-2 gap-3 mb-8 p-5 bg-black/50 border border-gray-800 rounded-sm">
                  <div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Calories</div>
                    <div className="text-xl font-light text-white">{ingredient.calories}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Protein</div>
                    <div className="text-xl font-light text-amber-400">{ingredient.protein}g</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Carbs</div>
                    <div className="text-xl font-light text-amber-400">{ingredient.carbs}g</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Fat</div>
                    <div className="text-xl font-light text-amber-400">{ingredient.fat}g</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-amber-500/20">
                  <span className="text-gray-500 text-xs font-light uppercase tracking-wide">Investment</span>
                  <span className="text-2xl font-light text-amber-400">
                    ${ingredient.price}
                  </span>
                </div>
                
                <button className="w-full py-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/50 transition-all duration-500">
                  Add to Composition
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals Section - Signature Dishes */}
      <section id="meals" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
              <span className="text-amber-400 text-xs font-light tracking-[0.3em] uppercase">Signature</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide uppercase">
              Signature
              <span className="font-light text-amber-400"> Compositions</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Pre-composed meals with complete macro analysis and optimized pricing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMeals.map((meal) => (
              <div
                key={meal.id}
                className="group bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
                
                <div className="text-9xl text-center py-16 bg-[#1a1a1a]/50 border-b border-amber-500/20 text-amber-400/20">{meal.image}</div>
                <div className="p-10">
                  <h3 className="text-2xl font-light text-white mb-8 tracking-wide uppercase">{meal.name}</h3>
                  
                  {/* Macro Breakdown - Scientific */}
                  <div className="grid grid-cols-2 gap-3 mb-8 p-5 bg-[#1a1a1a]/50 border border-gray-800 rounded-sm">
                    <div>
                      <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Calories</div>
                      <div className="text-xl font-light text-white">{meal.calories}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Protein</div>
                      <div className="text-xl font-light text-amber-400">{meal.protein}g</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Carbs</div>
                      <div className="text-xl font-light text-amber-400">{meal.carbs}g</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-2">Fat</div>
                      <div className="text-xl font-light text-amber-400">{meal.fat}g</div>
                    </div>
                  </div>

                  {/* Price Optimization */}
                  <div className="mb-8 p-5 bg-amber-500/5 border border-amber-500/20 rounded-sm">
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-amber-500/20">
                      <span className="text-xs text-gray-500 font-light uppercase tracking-wide">Original</span>
                      <span className="text-gray-600 line-through text-sm">${meal.price}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-light text-white uppercase tracking-wide">Optimized</span>
                      <span className="text-2xl font-light text-amber-400">${meal.optimizedPrice}</span>
                    </div>
                    <div className="text-xs text-amber-400/80 font-light uppercase tracking-wide">
                      Savings: ${(meal.price - meal.optimizedPrice).toFixed(2)}
                    </div>
                  </div>

                  <div className="mb-8 pb-8 border-b border-amber-500/20">
                    <p className="text-xs text-gray-500 font-light uppercase tracking-wide mb-4">Composition</p>
                    <div className="flex flex-wrap gap-2">
                      {meal.ingredients.map((ing, idx) => (
                        <span key={idx} className="bg-[#1a1a1a]/50 border border-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-sm font-light uppercase tracking-wide">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/50 transition-all duration-500">
                    Customize Composition
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Testimonials */}
      <section id="reviews" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] via-gray-950 to-[#1a1a1a] border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block mb-6 px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
              <span className="text-amber-400 text-xs font-light tracking-[0.3em] uppercase">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide uppercase">
              Client
              <span className="font-light text-amber-400"> Experiences</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Reflections from those who value precision and excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="group bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 p-10 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 relative"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
                
                <div className="flex items-center mb-8 pb-6 border-b border-amber-500/20">
                  <div className="text-5xl mr-4 text-amber-400/40">{review.avatar}</div>
                  <div>
                    <h4 className="font-light text-white text-lg tracking-wide uppercase mb-2">{review.name}</h4>
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 italic leading-relaxed font-light text-sm">"{review.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Luxury Call to Action */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] via-amber-950/20 to-[#1a1a1a] relative overflow-hidden border-y border-amber-500/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
            <span className="text-amber-400 text-xs font-light tracking-[0.3em] uppercase">Begin Your Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-12 tracking-wide uppercase leading-tight">
            Ready to Craft
            <br />
            <span className="font-light text-amber-400">Your Perfect Meal?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Experience precision nutrition tracking, intelligent optimization, and health-conscious alternatives
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              Real-time Calculations
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              Price Optimization
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              Healthier Suggestions
            </span>
          </div>
          <button className="group px-12 py-5 bg-amber-500/10 border border-amber-500/40 text-amber-300 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-sm">
            <span className="flex items-center justify-center gap-3">
              Commence Experience
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Footer - Elegant */}
      <footer className="bg-[#1a1a1a] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent tracking-wider uppercase">
              Build-Your-Own Meal
            </h3>
            <p className="text-gray-600 text-sm font-light tracking-wide uppercase">Nutrition Laboratory</p>
            <p className="text-gray-700 text-xs font-light mt-4">Macro-aware meal composition with real-time analysis</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <a href="#" className="text-gray-600 hover:text-amber-400 transition-colors font-light text-sm tracking-wide uppercase">About</a>
            <a href="#" className="text-gray-600 hover:text-amber-400 transition-colors font-light text-sm tracking-wide uppercase">Contact</a>
            <a href="#" className="text-gray-600 hover:text-amber-400 transition-colors font-light text-sm tracking-wide uppercase">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-amber-400 transition-colors font-light text-sm tracking-wide uppercase">Terms</a>
          </div>
          <div className="border-t border-amber-500/20 pt-8 text-center">
            <p className="text-gray-700 text-xs font-light tracking-wide">© 2024 Build-Your-Own Meal Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
