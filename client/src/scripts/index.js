import '../styles/index.scss';
import Taxonomy from './taxonomy';
import Search from './search';
import { ready, delay } from './domHelper';

const searchInput = document.getElementById('search-input');


const taxonomy = new Taxonomy();
const search = new Search();
// Fetches categories in the first place to be available to searches
taxonomy.fetchCategories();

/**
 * Main flow
 * 1- Waiting for document ready
 * 2- Listening keyup
 * 3- Delaying keyup until user stop writing
 * 4- Check if query is longer than 2 characters to hide panel
 * 5- Parallel querying walmart api and bind suggestions
 * 6-
 */


// 1- Waiting for document ready
ready(() => {
  // 2- Listening keyup
  searchInput.addEventListener('keyup',

    // 3- Delaying keyup until user stop writing
    delay(() => {
      document.getElementById('query-object').innerHTML = searchInput.value;

      // 4- Check if query is longer than 2 characters to hide panel
      if (searchInput.value.length < 3) {
        document.getElementById('suggestion-box').classList.add('hide');
        return;
      }
      // end of 4

      // 5- Parallel querying walmart api and bind suggestions
      Promise.all([taxonomy.populateKeywordSuggestions(searchInput.value),
        search.populateSearchSuggestions(searchInput.value)])
        .then(() => {
          document.getElementById('suggestion-box').classList.remove('hide');
        });
      // end of 5
    }, 300));
  // end of 2 and 3
});
// end of 1
