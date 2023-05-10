import './styles/index.scss';

import debounce from "./helpers/debounce";
import inputHandler from "./helpers/inputHandler";

const debouncedInputHandler = debounce(inputHandler, 167);

const autocompleteInput = document.querySelector('#food-search-autocomplete');
autocompleteInput.addEventListener('input', debouncedInputHandler);
