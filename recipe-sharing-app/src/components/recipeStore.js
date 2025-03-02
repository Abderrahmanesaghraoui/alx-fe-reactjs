import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for recipes
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Array of recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation: Recommend recipes that are in favorites
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;