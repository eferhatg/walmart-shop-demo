import TopProduct from './topProduct';
import TopCategory from './topCategory';
import { WM_API_SEARCH_FULL_PATH } from './wallmartapi';

export default class Search {
  constructor() {
    this.searchResults = [];
    this.topProducts = [];
    this.topCategories = [];
    this.error = null;
  }

  /*
   * fetchResults fetching search results from search api
   * and assigns them to this.searchResults
   * ---
   * @query is search criteria
   */
  fetchSearchResults(query) {
    const fetchURL = WM_API_SEARCH_FULL_PATH.replace('{{q}}', query);

    return fetch(fetchURL)
      .then((response) => {
        if (!response.ok) Promise.reject(response.text());
        return response.json();
      })
      .then(result => result.items)
      .then((searchResults) => {
        this.searchResults = searchResults;
      })
      .catch((err) => { this.error = err; });
  }

  /*
   * filterTopProducts filters the search results and
   * assigns top three products to TopProducts as TopProduct
   */
  filterTopProducts() {
    const result = [];
    if (!this.searchResults) return;
    this.topProducts = [];
    const sr = this.searchResults;
    for (let i = 0; i < 3; i += 1) {
      result.push(new TopProduct(sr[i].itemId, sr[i].name, sr[i].productUrl, sr[i].thumbnailImage));
    }
    this.topProducts = result;
  }

  /*
   * filterTopCategories filters the search results and
   * assigns top three categories to topCategories as TopCategory
   */
  filterTopCategories() {
    const result = [];
    if (!this.searchResults) return;
    this.topCategories = [];
    const sr = this.searchResults;
    sr.forEach((item) => {
      if (item.categoryPath) {
        const cats = item.categoryPath.split('/');
        const exactNode = cats[cats.length - 1];
        if (!result.some(e => e.name === exactNode) && result.length < 3) {
          result.push(new TopCategory(exactNode));
        }
      }
    });
    this.topCategories = result;
  }

  /*
   * populateSearchSuggestions populating  keyword suggestions to DOM
   * with search criteria.
   * 1) It fetches search results.
   * 2) Finding top products and categories suggestions
   * 3) Implementing new top properties to DOM
   * ---
   * @query is search criteria
   */
  populateSearchSuggestions(query) {
    if (query.length < 3) throw new Error('Search criteria is too short');

    this.error = null;
    return this.fetchSearchResults(query)
      .then(() => {
        this.filterTopProducts();
        this.filterTopCategories();
      })
      .then(() => {
        const topProdArray = this.topProducts.map(topProd => topProd.covertToHtmlElement());
        const topCatArray = this.topCategories.map(topCat => topCat.covertToHtmlElement());

        return {
          prod: topProdArray.join(''),
          cat: topCatArray.join(''),
        };
      })
      .then((topProps) => {
        document.getElementById('top-categories').innerHTML = topProps.cat || document.getElementById('top-categories').innerHTML;
        document.getElementById('top-products').innerHTML = topProps.prod || document.getElementById('top-products').innerHTML;
      })
      .catch((err) => { this.error = err; });
  }
}
