
import nock from 'nock';
import Taxonomy from './taxonomy';
import taxonomyResponse from './__mocks__/taxonomyResponse';
import { initialDom, expectedDom } from './__mocks__/taxonomyPopulateSuggestionBox';
import { WM_API_ENDPOINT, WM_API_TAXONOMY_PATH, WM_API_TAXONOMY_QUERYSTRINGS_OBJECT } from './wallmartapi';
import KeywordSuggestion from './keywordSuggestion';


describe('Mock Taxonomy Response', () => {
  test('defined correctly', () => {
    expect(typeof (taxonomyResponse)).toEqual('object');
  });
  test('shaped as correct form', () => {
    expect(taxonomyResponse).toHaveProperty('categories');
    expect(Array.isArray([taxonomyResponse.categories])).toBe(true);
    expect(taxonomyResponse.categories[0]).toHaveProperty('children');
  });
});


describe('Taxonomy', () => {
  test('defined correctly', () => {
    expect(typeof (Taxonomy)).toEqual('function');
  });

  describe('fetchCategories', () => {
    const t = new Taxonomy();

    test('defined correctly', () => {
      expect(typeof (t.fetchCategories)).toEqual('function');
    });


    test('fetches categories correctly', (done) => {
      const t1 = new Taxonomy();
      nock(WM_API_ENDPOINT)
        .get(WM_API_TAXONOMY_PATH)
        .query(WM_API_TAXONOMY_QUERYSTRINGS_OBJECT)
        .reply(200, taxonomyResponse);


      t1.fetchCategories()
        .then(() => {
          expect(t1.categories.length).not.toBe(0);
          done();
        }).catch((err) => {
          expect(err).toBeNull();
          done();
        });
    });


    test('failes if status is not 200', (done) => {
      const t2 = new Taxonomy();
      nock(WM_API_ENDPOINT)
        .get(WM_API_TAXONOMY_PATH)
        .query(WM_API_TAXONOMY_QUERYSTRINGS_OBJECT)
        .reply(404);


      t2.fetchCategories()
        .then(() => {
          expect(t2.categories.length).toBe(0);
          done();
        }).catch((err) => {
          expect(err).not.toBeNull();
          done();
        });
    });

    test('failes on error', (done) => {
      const t2 = new Taxonomy();
      nock(WM_API_ENDPOINT)
        .get(WM_API_TAXONOMY_PATH)
        .query(WM_API_TAXONOMY_QUERYSTRINGS_OBJECT)
        .replyWithError('Bad things happens');

      t2.fetchCategories()
        .then(() => {
          expect(t2.categories.length).toBe(0);
          done();
        }).catch((err) => {
          expect(err).not.toBeNull();
          done();
        });
    });
  });

  describe('findCategorySuggestions', () => {
    const t = new Taxonomy();

    test('defined correctly', () => {
      expect(typeof (t.findCategorySuggestions)).toEqual('function');
    });

    test('finds category suggestions correctly with a relevant search criteria', () => {
      t.categorySuggestions = [];
      t.categories = taxonomyResponse.categories;
      t.findCategorySuggestions('art');

      expect(t.categorySuggestions.length).toBe(3);
      expect(t.categorySuggestions[0] instanceof KeywordSuggestion).toBeTruthy();
    });

    test('finds no category suggestions with a bad search criteria', () => {
      t.categorySuggestions = [];
      t.categories = taxonomyResponse.categories;
      t.findCategorySuggestions('artasdasewasadasedwadawdwadad');
      expect(t.categorySuggestions.length).toBe(0);
    });

    test('finds no category suggestions with a bad argument', () => {
      t.categorySuggestions = [];
      t.categories = taxonomyResponse.categories;
      t.findCategorySuggestions(45);
      expect(t.categorySuggestions.length).toBe(0);
    });

    test('finds no category suggestions with an empty argument', () => {
      t.categorySuggestions = [];
      t.categories = taxonomyResponse.categories;
      t.findCategorySuggestions('');
      expect(t.categorySuggestions.length).toBe(0);
    });
  });


  describe('populateCategorySuggestions', () => {
    const t = new Taxonomy();

    test('defined correctly', () => {
      expect(typeof (t.populateKeywordSuggestions)).toEqual('function');
    });

    test('populates category suggestion with filled categories', () => {
      document.body.innerHTML = initialDom;

      const categoryBox = document.getElementById('category-box');

      t.categories = taxonomyResponse.categories;


      t.populateKeywordSuggestions('art').then(() => {
        expect(categoryBox.parentNode.parentNode.innerHTML).toEqual(expectedDom);
      }).catch((err) => {
        expect(err).toBeNull();
      });
    });

    test('populates category suggestion with empty categories', () => {
      document.body.innerHTML = initialDom;

      const categoryBox = document.getElementById('category-box');
      /**
       *  'art' Result
       * ----------------
       * [ CategorySuggestion { id: '1334134', name: 'Arts, Crafts & Sewing' },
       * CategorySuggestion { id: '1334134_5899871', name: 'Art Supplies' },
       *  CategorySuggestion { id: '1334134_7616708', name: 'Red Heart Yarn' } ]
       */

      nock(WM_API_ENDPOINT)
        .get(WM_API_TAXONOMY_PATH)
        .query(WM_API_TAXONOMY_QUERYSTRINGS_OBJECT)
        .reply(200, taxonomyResponse);
      t.populateKeywordSuggestions('art').then(() => {
        expect(categoryBox.parentNode.parentNode.innerHTML).toEqual(expectedDom);
      }).catch((err) => {
        expect(err).toBeNull();
      });
    });
  });
});
