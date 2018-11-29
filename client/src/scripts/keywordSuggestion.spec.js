import KeywordSuggestion from './keywordSuggestion';


describe('CategorySuggestion', () => {
  test('defined correctly', () => {
    expect(typeof (KeywordSuggestion)).toEqual('function');
  });

  describe('covertToHtmlElement', () => {
    test('converts KeywordSuggestion to html element correctly', () => {
      const t = new KeywordSuggestion('1334134_5899871', 'Art Supplies');
      expect(t.covertToHtmlElement('art')).toEqual('<li class="category-suggestion" value="1334134_5899871"><a href="#"><b>Art</b> Supplies</a></li>');
    });
  });
});
