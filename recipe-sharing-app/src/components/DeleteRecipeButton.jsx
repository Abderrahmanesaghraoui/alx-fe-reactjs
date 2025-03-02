import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId); // Delete the recipe
      alert('Recipe deleted successfully!');
      navigate('/'); // Redirect to the home page after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: 'red', color: 'white', padding: '8px 16px', border: 'none' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;