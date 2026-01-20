import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      height: null,
      weight: null,
      age: null,
      nutrients: null,
      error: null,

      // Set user info and calculate nutrients
      setUserInfo: ({ height, weight, age }) => {
        set({ height, weight, age });
        get().calculateDailyNutrients();
      },

      // Calculate daily nutrients (macros + calories + minerals + vitamins + micronutrients)
      calculateDailyNutrients: () => {
        const { height, weight, age } = get();
        if (!height || !weight || !age) return;

        // Macros
        const calories = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
        const protein = Math.round(weight * 1.6);
        const fat = Math.round((calories * 0.25) / 9);
        const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);

        // Just totals or simple numbers, no deep detail
        const minerals = Math.round((calories * 3) / 2);       // total number of minerals
        const vitamins = Math.round(10 * weight + 6.25 * height - 5 * age + 5)/100 ;      // total number of vitamins
        const micronutrients = Math.round((3* calories - protein * 2 - fat * 9) / 5); // fiber, water, sugar

        set({
          nutrients: { calories, protein, fat, carbs, minerals, vitamins, micronutrients },
          error: null,
        });
      },

      // Hydrate nutrients if user already exists in storage
      hydrateNutrients: () => {
        const { height, weight, age, nutrients } = get();
        if ((height && weight && age) && !nutrients) {
          get().calculateDailyNutrients();
        }
      },

      clearUserData: () =>
        set({ height: null, weight: null, age: null, nutrients: null, error: null }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);
