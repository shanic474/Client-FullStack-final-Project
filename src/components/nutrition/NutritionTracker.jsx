import { useCartStore } from "../../store/cart.store.jsx";
import {
  useNutritionStore,
  calculateNutritionTotals,
  calculatePercentages,
} from "../../store/nutrition.store.jsx";
import { useState } from "react";

const NutritionTracker = () => {
  const cart = useCartStore((s) => s.cart);
  const dailyGoals = useNutritionStore((s) => s.dailyGoals);
  const [hoveredNutrient, setHoveredNutrient] = useState(null);

  // Calculate totals and percentages
  const totals = calculateNutritionTotals(cart);
  const percentages = calculatePercentages(totals, dailyGoals);

  const nutrients = [
    {
      id: "calories",
      name: "Calories",
      current: Math.round(totals.calories),
      goal: dailyGoals.calories,
      percentage: percentages.calories,
      color: "amber",
      gradient: "from-amber-500 via-yellow-500 to-amber-600",
      icon: "🔥",
      unit: "kcal",
      emoji: "🔥",
      motivationalText: "Fuel your day!",
    },
    {
      id: "protein",
      name: "Protein",
      current: Math.round(totals.protein),
      goal: dailyGoals.protein,
      percentage: percentages.protein,
      color: "red",
      gradient: "from-red-500 via-pink-500 to-red-600",
      icon: "💪",
      unit: "g",
      emoji: "💪",
      motivationalText: "Build muscle!",
    },
    {
      id: "carbs",
      name: "Carbs",
      current: Math.round(totals.carbs),
      goal: dailyGoals.carbs,
      percentage: percentages.carbs,
      color: "blue",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      icon: "⚡",
      unit: "g",
      emoji: "⚡",
      motivationalText: "Power up!",
    },
    {
      id: "fat",
      name: "Fat",
      current: Math.round(totals.fat),
      goal: dailyGoals.fat,
      percentage: percentages.fat,
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      icon: "🥑",
      unit: "g",
      emoji: "🥑",
      motivationalText: "Healthy fats!",
    },
    {
      id: "vitamins",
      name: "Vitamins",
      current: Math.round(totals.vitamins),
      goal: dailyGoals.vitamins,
      percentage: percentages.vitamins,
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      icon: "",
      unit: "g",
      emoji: "🥕",
      motivationalText: "Healthy vitamins!",
    },
    {
      id: "minerals",
      name: "Minerals",
      current: Math.round(totals.minerals),
      goal: dailyGoals.minerals,
      percentage: percentages.minerals,
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      icon: "",
      unit: "g",
      emoji: "🪨",
      motivationalText: "Healthy minerals!",
    },
    {
      id: "micronutrients",
      name: "Micronutrients",
      current: Math.round(totals.micronutrients),
      goal: dailyGoals.micronutrients,
      percentage: percentages.micronutrients,
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      icon: "",
      unit: "g",
      emoji: "🌿",
      motivationalText: "Healthy micronutrients!",
    },
  ];

  // Calculate overall progress
  const overallProgress = Math.round(
    (percentages.calories +
      percentages.protein +
      percentages.carbs +
      percentages.fat) /
      4,
  );

  return (
    <div className="sticky top-32 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-700 relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

      <div className="p-10">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-amber-500/20 text-center">
          <h3 className="text-sm font-light tracking-[0.3em] uppercase text-amber-400 mb-2">
            Your Daily Progress
          </h3>
          <div className="text-5xl font-light text-white mb-2">
            {overallProgress}%
          </div>
          <p className="text-xs text-gray-500 font-light">
            Overall Goal Achievement
          </p>
        </div>

        {/* Circular Progress Chart */}
        <div className="mb-8 relative">
          <div className="w-72 h-72 mx-auto relative">
            {" "}
            {/* increased from w-64/h-64 */}
            <svg className="w-full h-full transform -rotate-90">
              {/* Outer ring - Calories */}
              <circle
                cx="144"
                cy="144"
                r="120"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="10"
              />
              <circle
                cx="144"
                cy="144"
                r="120"
                fill="none"
                stroke="url(#gradient-calories)"
                strokeWidth="10"
                strokeDasharray={`${(percentages.calories * 754) / 100} 754`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Protein */}
              <circle
                cx="144"
                cy="144"
                r="95"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="10"
              />
              <circle
                cx="144"
                cy="144"
                r="95"
                fill="none"
                stroke="url(#gradient-protein)"
                strokeWidth="10"
                strokeDasharray={`${(percentages.protein * 597) / 100} 597`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Carbs */}
              <circle
                cx="144"
                cy="144"
                r="72"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="10"
              />
              <circle
                cx="144"
                cy="144"
                r="72"
                fill="none"
                stroke="url(#gradient-carbs)"
                strokeWidth="10"
                strokeDasharray={`${(percentages.carbs * 452) / 100} 452`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Fat */}
              <circle
                cx="144"
                cy="144"
                r="55"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="10"
              />
              <circle
                cx="144"
                cy="144"
                r="55"
                fill="none"
                stroke="url(#gradient-fat)"
                strokeWidth="10"
                strokeDasharray={`${(percentages.fat * 345) / 100} 345`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Vitamins */}
              <circle
                cx="144"
                cy="144"
                r="42"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="8"
              />
              <circle
                cx="144"
                cy="144"
                r="42"
                fill="none"
                stroke="url(#gradient-vitamins)"
                strokeWidth="8"
                strokeDasharray={`${(percentages.vitamins * 263) / 100} 263`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Minerals */}
              <circle
                cx="144"
                cy="144"
                r="30"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="6"
              />
              <circle
                cx="144"
                cy="144"
                r="30"
                fill="none"
                stroke="url(#gradient-minerals)"
                strokeWidth="6"
                strokeDasharray={`${(percentages.minerals * 188) / 100} 188`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Micronutrients */}
              <circle
                cx="144"
                cy="144"
                r="20"
                fill="none"
                stroke="#2a2a2a"
                strokeWidth="4"
              />
              <circle
                cx="144"
                cy="144"
                r="20"
                fill="none"
                stroke="url(#gradient-micronutrients)"
                strokeWidth="4"
                strokeDasharray={`${(percentages.micronutrients * 125) / 100} 125`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />

              {/* Gradient definitions */}
              <defs>
                {/* Existing gradients */}
                <linearGradient
                  id="gradient-calories"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="gradient-protein"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <linearGradient
                  id="gradient-carbs"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient
                  id="gradient-fat"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>

                {/* New gradients */}
                <linearGradient
                  id="gradient-vitamins"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient
                  id="gradient-minerals"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6b7280" />
                  <stop offset="50%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="gradient-micronutrients"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="50%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="text-4xl mb-2">🍽️</div>
              <div className="text-xl font-light text-white">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Items
              </div>
            </div>
          </div>
        </div>

        {/* Interactive nutrient cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {nutrients.map((nutrient) => (
            <div
              key={nutrient.id}
              onMouseEnter={() => setHoveredNutrient(nutrient.id)}
              onMouseLeave={() => setHoveredNutrient(null)}
              className={`relative p-4 bg-gradient-to-br ${
                hoveredNutrient === nutrient.id
                  ? `${nutrient.gradient} opacity-20`
                  : "from-[#1a1a1a]/50 to-gray-900/50"
              } border ${
                hoveredNutrient === nutrient.id
                  ? "border-" + nutrient.color + "-500/60"
                  : "border-gray-800"
              } rounded-sm transition-all duration-300 cursor-pointer transform ${
                hoveredNutrient === nutrient.id ? "scale-105" : "scale-100"
              }`}
            >
              {/* Animated emoji */}
              <div
                className={`text-4xl mb-2 transition-transform duration-300 ${
                  hoveredNutrient === nutrient.id ? "animate-bounce" : ""
                }`}
              >
                {nutrient.emoji}
              </div>

              {/* Name */}
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                {nutrient.name}
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${nutrient.gradient} transition-all duration-700 ease-out rounded-full`}
                  style={{ width: `${nutrient.percentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* Values */}
              <div className="flex justify-between items-baseline">
                <span className="text-lg font-light text-white">
                  {nutrient.current}
                </span>
                <span className="text-xs text-gray-500">
                  / {nutrient.goal} {nutrient.unit}
                </span>
              </div>

              {/* Percentage badge */}
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-light bg-${nutrient.color}-500/20 text-${nutrient.color}-400 border border-${nutrient.color}-500/40`}
              >
                {Math.round(nutrient.percentage)}%
              </div>

              {/* Motivational text on hover */}
              {hoveredNutrient === nutrient.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-sm">
                  <p className="text-xs text-white font-light uppercase tracking-wide">
                    {nutrient.motivationalText}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fun achievement badges */}
        <div className="mb-8 p-4 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/30 rounded-sm">
          <div className="text-center">
            <div className="text-3xl mb-2">
              {cart.length === 0
                ? "🎯"
                : overallProgress >= 80
                  ? "🎉"
                  : overallProgress >= 50
                    ? "⭐"
                    : "🌟"}
            </div>
            <p className="text-xs text-amber-400/80 font-light leading-relaxed">
              {cart.length === 0
                ? "Start adding items to track!"
                : overallProgress >= 80
                  ? "Amazing! You're crushing it! 🎉"
                  : overallProgress >= 50
                    ? "Great progress! Keep going! ⭐"
                    : "You're on the right track! 🌟"}
            </p>
          </div>
        </div>

        {/* Customize button */}
        <button className="w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/50 transition-all duration-500 flex items-center justify-center gap-2">
          <span>⚙️</span>
          <span>Customize Goals</span>
        </button>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default NutritionTracker;
