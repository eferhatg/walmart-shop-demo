export default class TopProduct {
  constructor(id, name, url, img) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.img = img;
  }

  covertToHtmlElement() {
    return `<div class="suggestion-top"><a href="${this.url}"><img class="suggestion-top__img" src="${this.img}"><div class="suggestion-top__name">${this.name}</div></a></div>`;
  }
}
