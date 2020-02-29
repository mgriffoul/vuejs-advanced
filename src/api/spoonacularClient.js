import mockFindByIngredient from './spoonacularGetIngredientsMock';

export default function findByIngredients() {
  return new Promise(
    (resolve) => {
      setTimeout(() => {
        const myDatas = mockFindByIngredient();
        resolve(myDatas);
      }, 1000);
    },
  );
}
