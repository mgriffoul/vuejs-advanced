// import axios from 'axios';

// const call = async (ingredients) => {
//   const axiosConfig = {
//     timeout: 2000,
//     headers: {
//       accept: 'application/json',
//     },
//     data: {},
//     params: {
//       ingredients,
//       apiKey: 'b4d682540c4f49c7a2f22d3ee9bb5da1',
//     },
//   };
//   const data = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', axiosConfig);
//   console.log('in client');
//   console.log(data);
//   return data;
// };

// export default { call };

const mock = () => ({
  id: 37341,
  title: 'Stir-fried Soybean Sprouts',
  image: 'https://spoonacular.com/recipeImages/37341-312x231.jpg',
  imageType: 'jpg',
  usedIngredientCount: 1,
  missedIngredientCount: 2,
  missedIngredients: [
    {
      id: 11215,
      amount: 4.0,
      unit: '',
      unitLong: '',
      unitShort: '',
      aisle: 'Produce',
      name: 'cloves garlic',
      original: '4 x cloves garlic',
      originalString: '4 x cloves garlic',
      originalName: 'x cloves garlic',
      metaInformation: [],
      meta: [],
      image: 'https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg',
    },
    {
      id: 11291,
      amount: 3.0,
      unit: '',
      unitLong: '',
      unitShort: '',
      aisle: 'Produce',
      name: 'green onions',
      original: '3 x green onions',
      originalString: '3 x green onions',
      originalName: 'x green onions',
      metaInformation: [],
      meta: [],
      image: 'https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg',
    },
  ],
  usedIngredients: [
    {
      id: 11001,
      amount: 1.0,
      unit: 'lb',
      unitLong: 'pound',
      unitShort: 'lb',
      aisle: 'Produce',
      name: 'sprouts',
      original: '1 lb Soybean Sprouts',
      originalString: '1 lb Soybean Sprouts',
      originalName: 'Soybean Sprouts',
      metaInformation: [],
      meta: [],
      image: 'https://spoonacular.com/cdn/ingredients_100x100/alfalfa-sprouts.png',
    },
  ],
  unusedIngredients: [],
  likes: 9,
});

const myPromise = () => new Promise((resolve) => {
  const object = mock();
  resolve(object);
});

export default { myPromise };
