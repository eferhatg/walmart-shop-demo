import '../styles/index.scss';
import Taxonomy from './taxonomy';
import Search from './search';
import { ready, delay } from './domHelper';

const searchInput = document.getElementById('search-input');


const taxonomy = new Taxonomy();
const search = new Search();
// Fetches categories in the first place to be available to searches
taxonomy.fetchCategories();

ready(() => {
  searchInput.addEventListener('keyup',
    delay(() => {
      document.getElementById('query-object').innerHTML = searchInput.value;
      if (searchInput.value.length > 2) {
        Promise.all([taxonomy.populateKeywordSuggestions(searchInput.value),
          search.populateSearchSuggestions(searchInput.value)])
          .then(() => {
            document.getElementById('suggestion-box').classList.remove('hide');
          });
      } else {
        document.getElementById('suggestion-box').classList.add('hide');
      }
    }, 300));
});
