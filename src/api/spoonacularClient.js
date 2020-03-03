import mockFindByIngredient from './spoonacularGetIngredientsMock';
import mockGetRecipeInformations from './spoonacularGetRecipeInformationMock';

function findByIngredients() {
  return new Promise(
    (resolve) => {
      setTimeout(() => {
        const myDatas = mockFindByIngredient();
        resolve(myDatas);
      }, 1000);
    },
  );
}

function getRecipeInformations() {
  return new Promise(
    (resolve) => {
      const recipeInformation = mockGetRecipeInformations();
      resolve(recipeInformation);
    },
  );
}

export { findByIngredients, getRecipeInformations };
