const mockFindByIngredient = () => [{
  id: 19021,
  title: 'Tomatoes, Mixed Bean Sprouts And Mixed Leaves',
  image: 'https://spoonacular.com/recipeImages/19021-312x231.jpg',
  imageType: 'jpg',
  usedIngredientCount: 1,
  missedIngredientCount: 2,
  missedIngredients: [
    {
      id: 2004,
      amount: 1.0,
      unit: 'leaves',
      unitLong: 'leave',
      unitShort: 'leaf',
      aisle: 'Produce;Spices and Seasonings',
      name: 'bay leaves',
      original: 'Mixed leaves (Radicchio, Lettuce and Curly)',
      originalString: 'Mixed leaves (Radicchio, Lettuce and Curly)',
      originalName: 'Mixed (Radicchio, Lettuce and Curly)',
      metaInformation: [
        'mixed',
        '(Radicchio, Lettuce and Curly)',
      ],
      meta: [
        'mixed',
        '(Radicchio, Lettuce and Curly)',
      ],
      extendedName: 'mixed bay leaves',
      image: 'https://spoonacular.com/cdn/ingredients_100x100/bay-leaves.jpg',
    },
    {
      id: 11696,
      amount: 1.0,
      unit: 'serving',
      unitLong: 'serving',
      unitShort: 'serving',
      aisle: 'Produce',
      name: 'yellow tomatoes',
      original: 'Yellow and Red tomatoes',
      originalString: 'Yellow and Red tomatoes',
      originalName: 'Yellow and Red tomatoes',
      metaInformation: [
        'red',
        'yellow',
      ],
      meta: [
        'red',
        'yellow',
      ],
      extendedName: 'red yellow tomatoes',
      image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato-yellow.png',
    },
  ],
  usedIngredients: [
    {
      id: 11001,
      amount: 1.0,
      unit: 'serving',
      unitLong: 'serving',
      unitShort: 'serving',
      aisle: 'Produce',
      name: 'sprouts',
      original: 'Sprouts beans (Chickpeas, Lentils and other beans)',
      originalString: 'Sprouts beans (Chickpeas, Lentils and other beans)',
      originalName: 'Sprouts beans (Chickpeas, Lentils and other beans)',
      metaInformation: [
        '(Chickpeas, Lentils and other beans)',
      ],
      meta: [
        '(Chickpeas, Lentils and other beans)',
      ],
      image: 'https://spoonacular.com/cdn/ingredients_100x100/alfalfa-sprouts.png',
    },
  ],
  unusedIngredients: [],
  likes: 9,
},
{
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
}];

export default mockFindByIngredient;
