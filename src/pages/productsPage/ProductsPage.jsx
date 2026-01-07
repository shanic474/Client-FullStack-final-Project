import { useState } from 'react'
import Navbar from '../../components/Navbar'

function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('featured')

    // Product categories
    const categories = [
        { id: 'all', name: 'All Products', icon: '🌟' },
        { id: 'proteins', name: 'Proteins', icon: '🍗' },
        { id: 'grains', name: 'Grains', icon: '🌾' },
        { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
        { id: 'healthy-fats', name: 'Healthy Fats', icon: '🥑' },
    ]

    // Product data with detailed nutritional information
    const products = [
        // Proteins
        { id: 1, name: 'Grilled Chicken Breast', category: 'proteins', calories: 165, protein: 31, carbs: 0, fat: 4, price: 4.99, image: '🍗', featured: true, description: 'Lean, high-quality protein source' },
        { id: 2, name: 'Wild Salmon Fillet', category: 'proteins', calories: 206, protein: 22, carbs: 0, fat: 12, price: 7.99, image: '🐟', featured: true, description: 'Rich in omega-3 fatty acids' },
        { id: 3, name: 'Grass-Fed Beef', category: 'proteins', calories: 250, protein: 26, carbs: 0, fat: 15, price: 6.99, image: '🥩', featured: false, description: 'Premium quality beef' },
        { id: 4, name: 'Organic Tofu', category: 'proteins', calories: 144, protein: 17, carbs: 3, fat: 9, price: 3.49, image: '🧈', featured: false, description: 'Plant-based protein alternative' },
        { id: 5, name: 'Turkey Breast', category: 'proteins', calories: 135, protein: 30, carbs: 0, fat: 1, price: 5.49, image: '🦃', featured: false, description: 'Ultra-lean protein source' },

        // Grains
        { id: 6, name: 'Organic Quinoa', category: 'grains', calories: 222, protein: 8, carbs: 39, fat: 4, price: 3.49, image: '🌾', featured: true, description: 'Complete protein grain' },
        { id: 7, name: 'Brown Rice', category: 'grains', calories: 216, protein: 5, carbs: 45, fat: 2, price: 2.49, image: '🍚', featured: false, description: 'Whole grain goodness' },
        { id: 8, name: 'Steel-Cut Oats', category: 'grains', calories: 150, protein: 5, carbs: 27, fat: 3, price: 2.99, image: '🥣', featured: false, description: 'Slow-release energy' },
        { id: 9, name: 'Wild Rice Blend', category: 'grains', calories: 166, protein: 7, carbs: 35, fat: 1, price: 4.49, image: '🌾', featured: false, description: 'Nutrient-dense grain mix' },

        // Vegetables
        { id: 10, name: 'Sweet Potato', category: 'vegetables', calories: 103, protein: 2, carbs: 24, fat: 0, price: 1.99, image: '🍠', featured: true, description: 'Complex carbohydrates' },
        { id: 11, name: 'Organic Kale', category: 'vegetables', calories: 33, protein: 3, carbs: 6, fat: 1, price: 2.49, image: '🥬', featured: false, description: 'Superfood greens' },
        { id: 12, name: 'Broccoli Florets', category: 'vegetables', calories: 55, protein: 4, carbs: 11, fat: 1, price: 2.99, image: '🥦', featured: false, description: 'Vitamin-rich cruciferous' },
        { id: 13, name: 'Spinach', category: 'vegetables', calories: 23, protein: 3, carbs: 4, fat: 0, price: 1.99, image: '🌿', featured: false, description: 'Iron-rich leafy green' },
        { id: 14, name: 'Bell Peppers', category: 'vegetables', calories: 31, protein: 1, carbs: 6, fat: 0, price: 2.49, image: '🫑', featured: false, description: 'Vitamin C powerhouse' },

        // Healthy Fats
        { id: 15, name: 'Avocado', category: 'healthy-fats', calories: 234, protein: 3, carbs: 12, fat: 21, price: 2.99, image: '🥑', featured: true, description: 'Heart-healthy monounsaturated fats' },
        { id: 16, name: 'Extra Virgin Olive Oil', category: 'healthy-fats', calories: 119, protein: 0, carbs: 0, fat: 14, price: 5.99, image: '🫒', featured: false, description: 'Mediterranean diet staple' },
        { id: 17, name: 'Raw Almonds', category: 'healthy-fats', calories: 164, protein: 6, carbs: 6, fat: 14, price: 4.49, image: '🌰', featured: false, description: 'Nutrient-dense nuts' },
        { id: 18, name: 'Chia Seeds', category: 'healthy-fats', calories: 138, protein: 5, carbs: 12, fat: 9, price: 3.99, image: '🌱', featured: false, description: 'Omega-3 rich seeds' },
    ]

    // Filter and sort products
    const filteredProducts = products
        .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price
            if (sortBy === 'price-high') return b.price - a.price
            if (sortBy === 'protein') return b.protein - a.protein
            if (sortBy === 'calories') return a.calories - b.calories
            // Featured first by default
            if (a.featured && !b.featured) return -1
            if (!a.featured && b.featured) return 1
            return 0
        })

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white transition-colors duration-500">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
                    <div className="text-center">
                        {/* Elegant badge */}
                        <div className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm rounded-full">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <span className="text-amber-400 text-xs font-light tracking-[0.2em] uppercase">Premium Collection</span>
                        </div>

                        {/* Main headline */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1] tracking-wide uppercase">
                            Our
                            <br />
                            <span className="font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                Products
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                            Meticulously curated ingredients with <span className="text-amber-400">complete nutritional data</span> for your perfect meal composition.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}
                    <div className="mb-8">
                        <h3 className="text-xs font-light tracking-[0.3em] uppercase text-amber-400 mb-6">Categories</h3>
                        <div className="flex flex-wrap gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 border rounded-sm font-light text-sm tracking-wider uppercase transition-all duration-500 ${selectedCategory === category.id
                                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                                            : 'bg-[#1a1a1a]/50 border-gray-700 text-gray-400 hover:border-amber-500/40 hover:text-amber-400'
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <span>{category.icon}</span>
                                        <span>{category.name}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sort Options */}
                    <div className="flex items-center justify-between border-b border-amber-500/20 pb-6">
                        <div className="text-gray-500 text-sm font-light">
                            <span className="text-amber-400">{filteredProducts.length}</span> products available
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-light tracking-[0.3em] uppercase text-gray-500">Sort By</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-[#1a1a1a] border border-gray-700 text-gray-400 px-4 py-2 rounded-sm font-light text-sm focus:border-amber-500/40 focus:outline-none transition-colors"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="protein">Highest Protein</option>
                                <option value="calories">Lowest Calories</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] via-gray-950 to-[#1a1a1a]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 relative overflow-hidden"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
                                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
                                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

                                {/* Featured badge */}
                                {product.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-light px-3 py-1.5 rounded-sm uppercase tracking-wide backdrop-blur-sm">
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Product Image */}
                                <div className="text-8xl text-center py-16 bg-[#1a1a1a]/50 border-b border-amber-500/20 text-amber-400/20 group-hover:scale-110 transition-transform duration-700">
                                    {product.image}
                                </div>

                                {/* Product Details */}
                                <div className="p-8">
                                    <h3 className="text-xl font-light text-white mb-2 tracking-wide uppercase">{product.name}</h3>
                                    <p className="text-xs text-gray-500 font-light mb-6">{product.description}</p>

                                    {/* Nutritional Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-[#1a1a1a]/50 border border-gray-800 rounded-sm">
                                        <div>
                                            <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-1">Calories</div>
                                            <div className="text-lg font-light text-white">{product.calories}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-1">Protein</div>
                                            <div className="text-lg font-light text-amber-400">{product.protein}g</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-1">Carbs</div>
                                            <div className="text-lg font-light text-amber-400">{product.carbs}g</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-light uppercase tracking-wide mb-1">Fat</div>
                                            <div className="text-lg font-light text-amber-400">{product.fat}g</div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-amber-500/20">
                                        <span className="text-gray-500 text-xs font-light uppercase tracking-wide">Price</span>
                                        <span className="text-2xl font-light text-amber-400">${product.price}</span>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/50 transition-all duration-500">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
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

export default ProductsPage
