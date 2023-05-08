import debounce from "./helpers/debounce";
import './styles/index.scss';

import axios from "axios";

const autocompleteInput = document.querySelector('#food-search-autocomplete');
const suggestionsList = document.querySelector('#food-search-autocomplete-list');

const getRecipe = async (recipeName) => {
  try {
    const response = await axios.get('https://tasty.p.rapidapi.com/recipes/list', {
      params: {
        from: '0',
        size: '1',
        q: recipeName,
      },
      headers: {
        'X-RapidAPI-Key': '3b30dbd423mshcd72d0038a7ed6cp1acaf5jsnd292dd15c4dc',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const debouncedInputHandler = debounce(async (event) => {
  const value = event.target.value?.toLowerCase();

  if (!value) {
    suggestionsList.classList.add('hidden');
    suggestionsList.replaceChildren();

    return;
  }

  try {
    const response = await axios.get('https://tasty.p.rapidapi.com/recipes/auto-complete', {
      params: {
        prefix: value,
      },
      headers: {
        'X-RapidAPI-Key': '3b30dbd423mshcd72d0038a7ed6cp1acaf5jsnd292dd15c4dc',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    });

    const suggestionOptions = response.data.results.map((suggestion) => {
      const newOption = document.createElement('span');
      newOption.innerText = suggestion.display;
      newOption.addEventListener('click', () => {
        getRecipe(suggestion.display);
        autocompleteInput.value = suggestion.display;
        suggestionsList.classList.add('hidden');
        suggestionsList.replaceChildren();
      });
      newOption.setAttribute('class', 'autocomplete-option');

      return newOption;
    });

    if (suggestionOptions.length === 0) {
      const newOption = document.createElement('span');
      newOption.innerText = 'No results found';
      newOption.setAttribute('class', 'autocomplete-option');

      suggestionOptions.push(newOption);
    }

    suggestionsList.replaceChildren(...suggestionOptions);
    suggestionsList.classList.remove('hidden');
  } catch (error) {
    console.error(error);
  }
}, 167);

autocompleteInput.addEventListener('input', (event) => debouncedInputHandler(event));
