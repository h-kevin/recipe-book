import './styles/index.scss';

import debounce from "./helpers/debounce";
import inputHandler from "./helpers/inputHandler";

const debouncedInputHandler = debounce(inputHandler, 167);

const autocompleteForm = document.querySelector('#food-search-box');
autocompleteForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

const autocompleteInput = document.querySelector('#food-search-autocomplete');
autocompleteInput.addEventListener('input', debouncedInputHandler);
