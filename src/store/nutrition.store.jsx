import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNutritionStore = create(
  persist(
    (set) => ({
      // User's daily goals (can be customized per user)
      dailyGoals: {
        calories: 2000,
        protein: 150,
        carbs: 250,
        fat: 65,
        vitamins: 100,
        minerals: 100,
        micronutrients: 100
      },

      // Update daily goals
      setDailyGoals: (goals) => set({ dailyGoals: goals }),

      // Update individual goal
      updateGoal: (nutrient, value) =>
        set((state) => ({
          dailyGoals: {
            ...state.dailyGoals,
            [nutrient]: value
          }
        })),

      // Reset to default goals
      resetGoals: () =>
        set({
          dailyGoals: {
            calories: 2000,
            protein: 150,
            carbs: 250,
            fat: 65,
            vitamins: 100,
            minerals: 100,
            micronutrients: 100
          }
        })
    }),
    {
      name: 'nutrition-goals-storage'
    }
  )
);

// Helper function to calculate nutrition totals from cart
export const calculateNutritionTotals = (cart) => {
  return cart.reduce(
    (acc, item) => ({
      calories: acc.calories + (item.calories || 0) * item.quantity,
      protein: acc.protein + (item.protein || 0) * item.quantity,
      carbs: acc.carbs + (item.carbs || 0) * item.quantity,
      fat: acc.fat + (item.fat || 0) * item.quantity,
      vitamins: acc.vitamins + (item.vitamins || 0) * item.quantity,
      minerals: acc.minerals + (item.minerals || 0) * item.quantity,
      micronutrients: acc.micronutrients + (item.micronutrients || 0) * item.quantity
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, vitamins: 0, minerals: 0, micronutrients: 0 }
  );
};

// Helper function to calculate percentages
export const calculatePercentages = (totals, goals) => {
  return {
    calories: Math.min((totals.calories / goals.calories) * 100, 100),
    protein: Math.min((totals.protein / goals.protein) * 100, 100),
    carbs: Math.min((totals.carbs / goals.carbs) * 100, 100),
    fat: Math.min((totals.fat / goals.fat) * 100, 100),
    vitamins: Math.min((totals.vitamins / goals.vitamins) * 100, 100),
    minerals: Math.min((totals.minerals / goals.minerals) * 100, 100),
    micronutrients: Math.min((totals.micronutrients / goals.micronutrients) * 100, 100)
  };
};