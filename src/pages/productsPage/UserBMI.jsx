import { useUserStore } from "../../store/user.store.jsx";

const UserBMI = () => {
  const { nutrients } = useUserStore();

  if (!nutrients) {
    return (
      <div className="bg-gray-800 p-6 rounded-sm my-6 text-gray-400 text-center">
        Your daily nutrients will appear here once loaded.
      </div>
    );
  }

  const { calories, protein, fat, carbs, minerals, vitamins, micronutrients } = nutrients;

  return (
    <section className="py-2">
        <h1 className="pb-4" align="center">Daily Nutrients</h1>
      <div className="flex flex-wrap gap-4 border-b border-amber-500/20 pb-6">
        {/* Calories */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Calories: {calories} kcal
        </div>

        {/* Carbs */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Carbs: {carbs} g
        </div>

        {/* Protein */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Protein: {protein} g
        </div>

        {/* Fat */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Fat: {fat} g
        </div>

        {/* Minerals */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Minerals : {minerals} g
        </div>

        {/* Vitamins */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Vitamins : {vitamins} g
        </div>

        {/* Micronutrients */}
        <div className="px-6 py-3 border border-gray-700 text-gray-400 rounded-sm text-sm uppercase tracking-wider hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300 flex-1 text-center">
          Micronutrients : {micronutrients} g
        </div>
      </div>
    </section>
  );
};

export default UserBMI;
