import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      // Fetch the mock data from data.json
      fetch('/src/data.json')
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error fetching recipes:', error));
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>
        <div className="text-center mb-6">
          <Link
            to="/add-recipe"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Add New Recipe
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default HomePage;