import { useState } from 'react';
import { useNutritionStore } from "../../store/nutrition.store.jsx";

const NutritionGoalsModal = ({ isOpen, onClose }) => {
  const { dailyGoals, setDailyGoals, resetGoals } = useNutritionStore();
  const [localGoals, setLocalGoals] = useState(dailyGoals);

  if (!isOpen) return null;

  const handleSave = () => {
    setDailyGoals(localGoals);
    onClose();
  };

  const handleReset = () => {
    resetGoals();
    setLocalGoals({
      calories: 2000,
      protein: 150,
      carbs: 250,
      fat: 65
    });
  };

  const handleChange = (nutrient, value) => {
    setLocalGoals(prev => ({
      ...prev,
      [nutrient]: parseInt(value) || 0
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 w-full max-w-md mx-4 relative">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

        <div className="p-10">
          {/* Header */}
          <div className="mb-8 pb-6 border-b border-amber-500/20">
            <h3 className="text-xl font-light tracking-[0.3em] uppercase text-amber-400 mb-2">
              Daily Goals
            </h3>
            <p className="text-xs text-gray-500 font-light">
              Customize your daily nutrition targets
            </p>
          </div>

          {/* Goal inputs */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-light text-white uppercase tracking-wide mb-3">
                <span className="text-2xl">🔥</span>
                Calories (kcal)
              </label>
              <input
                type="number"
                value={localGoals.calories}
                onChange={(e) => handleChange('calories', e.target.value)}
                className="w-full bg-[#1a1a1a]/50 border border-gray-800 text-white px-4 py-3 rounded-sm focus:border-amber-500/40 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-light text-white uppercase tracking-wide mb-3">
                <span className="text-2xl">💪</span>
                Protein (g)
              </label>
              <input
                type="number"
                value={localGoals.protein}
                onChange={(e) => handleChange('protein', e.target.value)}
                className="w-full bg-[#1a1a1a]/50 border border-gray-800 text-white px-4 py-3 rounded-sm focus:border-amber-500/40 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-light text-white uppercase tracking-wide mb-3">
                <span className="text-2xl">🌾</span>
                Carbs (g)
              </label>
              <input
                type="number"
                value={localGoals.carbs}
                onChange={(e) => handleChange('carbs', e.target.value)}
                className="w-full bg-[#1a1a1a]/50 border border-gray-800 text-white px-4 py-3 rounded-sm focus:border-amber-500/40 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-light text-white uppercase tracking-wide mb-3">
                <span className="text-2xl">🥑</span>
                Fat (g)
              </label>
              <input
                type="number"
                value={localGoals.fat}
                onChange={(e) => handleChange('fat', e.target.value)}
                className="w-full bg-[#1a1a1a]/50 border border-gray-800 text-white px-4 py-3 rounded-sm focus:border-amber-500/40 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="flex-1 py-3 border border-gray-700 text-gray-400 rounded-sm font-light text-sm tracking-wider uppercase hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300"
            >
              Reset
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 border border-gray-700 text-gray-400 rounded-sm font-light text-sm tracking-wider uppercase hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/50 transition-all duration-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionGoalsModal;