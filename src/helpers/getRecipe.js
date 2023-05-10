import axios from "axios";

import apiBaseUrl from "../constants/apiBaseUrl";
import apiHost from "../constants/apiHost";
import apiKey from "../constants/apiKey";

const getRecipe = async (recipeName) => {
  try {
    const params = {
      from: '0',
      size: '1',
      q: recipeName,
    };

    const headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    };

    const response = await axios.get(`${apiBaseUrl}/recipes/list`, {
      params,
      headers,
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getRecipe;
