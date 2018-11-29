import nock from 'nock';



import searchResponse from './__mocks__/searchResponse';
import Search from './search';
import { searchInitialDom, searchExpectedDom } from './__mocks__/searchPopulateSuggestionBox';
import { WM_API_ENDPOINT, WM_API_SEARCH_PATH, WM_API_SEARCH_QUERYSTRINGS_OBJECT } from './wallmartapi';
import TopProduct from './topProduct';
import TopCategory from './topCategory';


describe('Mock Search Response', () => {
  test('defined correctly', () => {
    expect(typeof (searchResponse)).toEqual('object');
  });
  test('shaped as correct form', () => {
    expect(searchResponse).toHaveProperty('items');
    expect(Array.isArray([searchResponse.items])).toBe(true);
    expect(searchResponse.items[0]).toHaveProperty('name');
  });
});


describe('Search', () => {
  test('defined correctly', () => {
    expect(typeof (Search)).toEqual('function');
  });
  let qString = '';
  beforeEach(() => {
    qString = Object.assign({}, WM_API_SEARCH_QUERYSTRINGS_OBJECT);
    qString.query = 'art';
  });


  describe('fetchSearchResults', () => {
    const s = new Search();

    test('defined correctly', () => {
      expect(typeof (s.fetchSearchResults)).toEqual('function');
    });


    test('fetches search results correctly', (done) => {
      const s1 = new Search();


      nock(WM_API_ENDPOINT)
        .get(WM_API_SEARCH_PATH)
        .query(qString)
        .reply(200, searchResponse);


      s1.fetchSearchResults('art')
        .then(() => {
          expect(s1.searchResults.length).not.toBe(0);
          done();
        }).catch((err) => {
          expect(err).toBeNull();
        });
    });


    test('failes if status is not 200', (done) => {
      const s2 = new Search();
      nock(WM_API_ENDPOINT)
        .get(WM_API_SEARCH_PATH)
        .query(qString)
        .reply(404);


      s2.fetchSearchResults('art')
        .then(() => {
          expect(s2.searchResults.length).toBe(0);
          done();
        }).catch((err) => {
          expect(err).not.toBeNull();
        });
    });
  });


  describe('filterTopProducts', () => {
    const s = new Search();

    test('defined correctly', () => {
      expect(typeof (s.filterTopProducts)).toEqual('function');
    });

    test('filters top products correctly ', () => {
      s.topProducts = [];
      s.searchResults = searchResponse.items;
      s.filterTopProducts();

      expect(s.topProducts.length).toBe(3);
      expect(s.topProducts[0] instanceof TopProduct).toBeTruthy();
    });
  });

  describe('filterTopCategories', () => {
    const s = new Search();

    test('defined correctly', () => {
      expect(typeof (s.filterTopCategories)).toEqual('function');
    });

    test('filters top products correctly ', () => {
      s.topCategories = [];
      s.searchResults = searchResponse.items;
      s.filterTopCategories();

      expect(s.topCategories.length).toBe(3);
      expect(s.topCategories[0] instanceof TopCategory).toBeTruthy();
    });
  });


  describe('populateSearchSuggestions', () => {
    const s = new Search();

    test('defined correctly', () => {
      expect(typeof (s.populateSearchSuggestions)).toEqual('function');
    });

    test('populates search suggestions correctly', () => {
      document.body.innerHTML = searchInitialDom;

      const suggestionBox = document.getElementById('suggestion-box');
      /**
       *  'art' Result
       * ----------------
       * [ CategorySuggestion { id: '1334134', name: 'Arts, Crafts & Sewing' },
       * CategorySuggestion { id: '1334134_5899871', name: 'Art Supplies' },
       *  CategorySuggestion { id: '1334134_7616708', name: 'Red Heart Yarn' } ]
       */

      nock(WM_API_ENDPOINT)
        .get(WM_API_SEARCH_PATH)
        .query(qString)
        .reply(200, searchResponse);
      s.populateSearchSuggestions('art').then(() => {
        expect(suggestionBox.parentNode.innerHTML).toEqual(searchExpectedDom);
      }).catch((err) => {
        expect(err).toBeNull();
      });
    });
  });
});
