export default class TopCategory {
  constructor(name) {
    this.name = name;
  }

  covertToHtmlElement() {
    return `<li><a href="#">${this.name}</a></li>`;
  }
}
