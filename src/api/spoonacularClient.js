import mockFindByIngredient from './spoonacularGetIngredientsMock';

export default function findByIngredients() {
  return new Promise(
    (resolve) => {
      const myDatas = mockFindByIngredient();
      resolve(myDatas);
    },
  );
}
