import '../styles/index.scss';
import Taxonomy from './taxonomy';
import Search from './search';
import { ready, delay } from './domHelper';

const searchInput = document.getElementById('search-input');


const taxonomy = new Taxonomy();
const search = new Search();
// Fetches categories in the first place to be available to searches
taxonomy.fetchCategories();


/*
* Checks if query is longer than 2 characters to trigger suggestionbox
* Parallel querying walmart api and bind suggestions
*/
const triggerSuggestionBox = (query) => {
  if (query.length < 3) {
    document.getElementById('suggestion-box').classList.add('hide');
    return;
  }
  document.getElementById('loading').classList.remove('hide');
  Promise.all([taxonomy.populateKeywordSuggestions(searchInput.value),
    search.populateSearchSuggestions(searchInput.value)])
    .then(() => {
      document.getElementById('loading').classList.add('hide');
      document.getElementById('suggestion-box').classList.remove('hide');
    });
};


// Waiting for document ready
ready(() => {
  // Listening keyup
  searchInput.addEventListener('keyup',
    // Delaying keyup until user stop writing
    delay(() => {
      document.getElementById('query-object').innerHTML = searchInput.value;
      triggerSuggestionBox(searchInput.value);
    }, 200));
  // Hiding suggestion box on focusout
  let beforeFocusoutValue = '';
  searchInput.addEventListener('focusout', () => {
    beforeFocusoutValue = searchInput.value;
    document.getElementById('suggestion-box').classList.add('hide');
  });
  // triggering suggestion box on focusin
  searchInput.addEventListener('focusin', () => {
    if (searchInput.value.length >= 3) {
      if (beforeFocusoutValue === searchInput.value) {
        document.getElementById('suggestion-box').classList.remove('hide');
        return;
      }
      triggerSuggestionBox(searchInput.value);
    }
  });
});
