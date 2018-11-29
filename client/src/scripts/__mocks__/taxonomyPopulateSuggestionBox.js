export const initialDom = '<div class="suggestion__box__panel--cat">'
+ '<ul id="category-box" class="suggestion__cat-list">'
  + '<li id="query" class="active"><a href="#"><b id="query-object">test</b></a>'
    + '<ul id="top-categories" class="suggestion__cat-active-list">'
        + '<li><a href="#">Polyethylene Fittings</a></li>'
        + '<li><a href="#">Pool Chemicals</a></li>'
        + '<li><a href="#">Electrical Testers &amp; Tools</a></li>'
    + '</ul>'
  + '</li>'
  + '<li class="category-suggestion" value="3920_6060018"><a href="#">Study Aids &amp; <b>Test</b> Prep Books</a></li>'
  + '<li class="category-suggestion" value="976759_4321481"><a href="#"><b>Test</b>ing Season</a></li>'
  + '<li class="category-suggestion" value="1085632_2236515"><a href="#">Custom HTML <b>Test</b> Pages</a></li>'
+ '</ul>'
+ '</div>';

/**
 *  'art' Result
 * ----------------
 * [ CategorySuggestion { id: '1334134', name: 'Arts, Crafts & Sewing' },
 * CategorySuggestion { id: '1334134_5899871', name: 'Art Supplies' },
 *  CategorySuggestion { id: '1334134_7616708', name: 'Red Heart Yarn' } ]
 */

export const expectedDom = '<div class="suggestion__box__panel--cat">'
+ '<ul id="category-box" class="suggestion__cat-list">'
  + '<li id="query" class="active"><a href="#"><b id="query-object">test</b></a>'
    + '<ul id="top-categories" class="suggestion__cat-active-list">'
        + '<li><a href="#">Polyethylene Fittings</a></li>'
        + '<li><a href="#">Pool Chemicals</a></li>'
        + '<li><a href="#">Electrical Testers &amp; Tools</a></li>'
    + '</ul>'
  + '</li>'
  + '<li class="category-suggestion" value="1334134"><a href="#"><b>Art</b>s, Crafts &amp; Sewing</a></li>'
  + '<li class="category-suggestion" value="1334134_5899871"><a href="#"><b>Art</b> Supplies</a></li>'
  + '<li class="category-suggestion" value="1334134_7616708"><a href="#">Red He<b>art</b> Yarn</a></li>'
+ '</ul>'
+ '</div>';
