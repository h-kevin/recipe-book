import axios from "axios";

import apiBaseUrl from "../constants/apiBaseUrl";
import apiHost from "../constants/apiHost";
import apiKey from "../constants/apiKey";

const getRecipe = async (recipeName) => {
  const recipeContent = document.querySelector('#recipe-content');
  const contentLoadingIndicator = document.createElement('div');
  contentLoadingIndicator.classList.add('loading-indicator-container');
  const spinner = document.createElement('span');
  spinner.classList.add('loading-indicator');
  const loadingText = document.createElement('span');
  loadingText.innerText = 'Loading...';
  contentLoadingIndicator.append(spinner, loadingText);

  try {
    recipeContent.replaceChildren(contentLoadingIndicator);

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

    recipeContent.innerHTML = '';
    console.log(response.data);
  } catch (error) {
    recipeContent.innerHTML = '';
    console.log(error);
  }
};

export default getRecipe;
