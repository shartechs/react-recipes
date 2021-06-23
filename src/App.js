import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return (
     <RecipeList recipes={sampleRecipes} />
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "Put salt on Chicken\n Put chicken in oven\n Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "Put paprika on Pork\n Put pork in oven\n Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
] 

export default App;
