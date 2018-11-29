export default class KeywordSuggestion {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  covertToHtmlElement(query) {
    const startIx = this.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
    const text = `${this.name.substr(0, startIx)}<b>${this.name.substr(startIx, query.length)}</b>${this.name.substr(startIx + query.length)}`;
    return `<li class="category-suggestion" value="${this.id}"><a href="#">${text}</a></li>`;
  }
}
