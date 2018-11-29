
import { WM_API_TAXONOMY_FULL_PATH } from './wallmartapi';
import KeywordSuggestion from './keywordSuggestion';

export default class Taxonomy {
  constructor() {
    this.categories = [];
    this.categorySuggestions = [];
  }

  /*
   * fetchCategories fetching categories from taxonomy api
   * and assigns them to this.categories
   * ---
   * @fn is callback for err handling
   */
  fetchCategories() {
    return fetch(WM_API_TAXONOMY_FULL_PATH)
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(result => result.categories)
      .then((categories) => {
        this.categories = categories;
      })
      .catch(err => err);
  }


  /*
   * findCategorySuggestions traverse this.categories with
   * Breadth First Search and finds top three categories
   * corresponding to search criteria and assigns them
   * this.categorySuggestions
   * ---
   * @str is search criteria
   */
  findCategorySuggestions(str) {
    if ((typeof str) !== 'string') return;
    if (!str) return;

    const schema = [...this.categories];
    const result = [];

    while (result.length < 3 && schema.length) {
      const cat = schema.shift();
      if (cat.name.toLocaleLowerCase().indexOf(str.toLocaleLowerCase()) !== -1) {
        result.push(new KeywordSuggestion(cat.id, cat.name));
      }
      if (cat.children && Array.isArray(cat.children)) {
        schema.push(...cat.children);
      }
    }
    this.categorySuggestions = result || this.categorySuggestions;
  }

  /*
   * populateKeywordSuggestions populating  keyword suggestions to DOM
   * with search criteria.
   * 1) It looks for existing categories, if not found try to refetch again.
   * 2) Finding keyword suggestions by categories
   * 3) Implementing new keyword suggestions to DOM
   * ---
   * @query is search criteria
   */
  populateKeywordSuggestions(query) {
    if (query.length < 3) throw new Error('Search criteria is too short');


    const categoryBox = document.getElementById('category-box');
    const fetchPromise = this.categories.length > 0
      ? Promise.resolve(this.categories)
      : this.fetchCategories();

    return fetchPromise
      .then(() => {
        this.findCategorySuggestions(query);
      })
      .then(() => {
        const catSuggArray = this.categorySuggestions
          .map(catSugg => catSugg.covertToHtmlElement(query));

        return catSuggArray.join('');
      })
      .then((catSuggHTML) => {
        if (catSuggHTML === '') return;
        const keywordSuggestionNodes = categoryBox.querySelectorAll('.category-suggestion');
        keywordSuggestionNodes.forEach((childNode) => {
          childNode.parentNode.removeChild(childNode);
        });
        categoryBox.innerHTML += catSuggHTML;
      });
  }
}
