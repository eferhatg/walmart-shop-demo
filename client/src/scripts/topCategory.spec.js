import TopCategory from './topCategory';


describe('TopCategory', () => {
  test('defined correctly', () => {
    expect(typeof (TopCategory)).toEqual('function');
  });

  describe('covertToHtmlElement', () => {
    test('converts KeywordSuggestion to html element correctly', () => {
      const t = new TopCategory('Art Supplies');
      expect(t.name).toEqual('Art Supplies');
      expect(t.covertToHtmlElement()).toEqual('<li><a href="#">Art Supplies</a></li>');
    });
  });
});
