import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
          }}
        >
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ margin: '5px 0' }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;