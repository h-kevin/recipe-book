import axios from "axios";

import apiBaseUrl from "../constants/apiBaseUrl";
import apiHost from "../constants/apiHost";
import apiKey from "../constants/apiKey";
import updateSuggestionsList from "./updateSuggestionsList";

const inputHandler = async (event) => {
  const suggestionsList = document.querySelector('#food-search-autocomplete-list');
  const value = event.target.value?.toLowerCase();

  if (!value) {
    suggestionsList.classList.add('hidden');
    suggestionsList.replaceChildren();

    return;
  }

  try {
    const params = {
      prefix: value,
    };

    const headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    };

    const response = await axios.get(`${apiBaseUrl}/recipes/auto-complete`, {
      params,
      headers,
    });

    updateSuggestionsList(response.data.results, suggestionsList);
  } catch (error) {
    console.error(error);
  }
};

export default inputHandler;
