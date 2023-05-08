import './styles/index.scss';

const suggestionsArray = [
  {
    display: "chicken noodle soup",
    search_value: "chicken noodle soup",
    type: "ingredient"
  },
  {
    display: "chicken soup",
    search_value: "chicken soup",
    type: "ingredient"
  },
  {
    type: "ingredient",
    display: "chicken tortilla soup",
    search_value: "chicken tortilla soup"
  },
];

const autocompleteInput = document.querySelector('#food-search-autocomplete');
const suggestionsList = document.querySelector('#food-search-autocomplete-list');

autocompleteInput.addEventListener('input', (event) => {
  const value = event.target.value?.toLowerCase();

  if (!value) {
    suggestionsList.classList.add('hidden');
    suggestionsList.replaceChildren();

    return;
  }

  /* just for testing, we will filter from the prefilled suggestionsArray */

  const filteredSuggestionsArray = suggestionsArray.filter(
    (suggestion) => suggestion.display.toLowerCase().includes(value),
  );

  /* --- */

  // 1. send request to get suggestions based on input value
  // 2. fill "suggestionsArray" with the suggestions you get back

  const suggestionOptions = filteredSuggestionsArray.map((suggestion) => {
    const newOption = document.createElement('span');
    newOption.innerText = suggestion.display;
    newOption.addEventListener('click', () => {
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
});
