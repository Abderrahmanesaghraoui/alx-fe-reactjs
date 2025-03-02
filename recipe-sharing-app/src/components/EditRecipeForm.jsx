import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients?.join(', ') || '');
  const [instructions, setInstructions] = useState(recipe.instructions || '');
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: recipe.id,
      title,
      description,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      instructions,
    };
    updateRecipe(updatedRecipe);
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Ingredients (comma-separated):
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </label>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;