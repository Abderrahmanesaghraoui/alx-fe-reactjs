import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%', height: '100px' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: 'navy',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;