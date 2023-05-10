import getRecipe from "./getRecipe";

const updateSuggestionsList = (suggestionsListArray, suggestionsListElement) => {
  const autocompleteInput = document.querySelector('#food-search-autocomplete');

  const suggestionOptions = suggestionsListArray.map((suggestion) => {
    const newOption = document.createElement('span');
    newOption.innerText = suggestion.display;
    newOption.addEventListener('click', () => {
      getRecipe(suggestion.display);
      autocompleteInput.value = suggestion.display;
      suggestionsListElement.classList.add('hidden');
      suggestionsListElement.replaceChildren();
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

  suggestionsListElement.replaceChildren(...suggestionOptions);
  suggestionsListElement.classList.remove('hidden');
};

export default updateSuggestionsList;
