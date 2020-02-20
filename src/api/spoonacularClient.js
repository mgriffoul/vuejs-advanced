import axios from 'axios';

const call = async (ingredients) => {
  const axiosConfig = {
    timeout: 2000,
    headers: {
      accept: 'application/json',
    },
    data: {},
    params: {
      ingredients,
      apiKey: 'b4d682540c4f49c7a2f22d3ee9bb5da1',
    },
  };
  const data = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', axiosConfig);
  return data;
};

export default { call };
