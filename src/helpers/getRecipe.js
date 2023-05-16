import axios from "axios";

import apiBaseUrl from "../constants/apiBaseUrl";
import apiHost from "../constants/apiHost";
import apiKey from "../constants/apiKey";
import manageRecipeContentLoading from "./manageRecipeContentLoading";
import displayRecipeData from "./displayRecipeData";

const getRecipe = async (recipeQuery) => {
  manageRecipeContentLoading(true);

  try {
    const params = {
      from: '0',
      size: '1',
      q: recipeQuery,
    };

    const headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    };

    const response = await axios.get(`${apiBaseUrl}/recipes/list`, {
      params,
      headers,
    });

    manageRecipeContentLoading(false);

    let recipeData = response.data.results[0];

    if (response.data.results[0].recipes?.length) {
      recipeData = response.data.results[0].recipes[0];
    }

    displayRecipeData(recipeData);
  } catch (error) {
    manageRecipeContentLoading(false);
    console.log(error);
  }
};

export default getRecipe;
