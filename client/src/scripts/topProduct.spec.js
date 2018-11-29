import TopProduct from './topProduct';


describe('TopProduct', () => {
  test('defined correctly', () => {
    expect(typeof (TopProduct)).toEqual('function');
  });

  describe('covertToHtmlElement', () => {
    test('converts KeywordSuggestion to html element correctly', () => {
      const t = new TopProduct('12', 'Art Supplies', 'http://google.com', 'http://google.com/img.jpg');
      expect(t.name).toEqual('Art Supplies');
      expect(t.id).toEqual('12');
      expect(t.img).toEqual('http://google.com/img.jpg');
      expect(t.url).toEqual('http://google.com');
      expect(t.covertToHtmlElement()).toEqual('<div class="suggestion-top"><a href="http://google.com"><img class="suggestion-top__img" src="http://google.com/img.jpg"><div class="suggestion-top__name">Art Supplies</div></a></div>');
    });
  });
});
