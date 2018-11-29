export const searchInitialDom = '<div id="suggestion-box" class="suggestion__box hide"><div class="suggestion__box__panel"><div class="suggestion__box__panel--cat">'
+ '<ul id="category-box" class="suggestion__cat-list"><li id="query" class="active"><a href="#" ><b id="query-object">test</b></a>'
+ '<ul id="top-categories" class="suggestion__cat-active-list"><li><a href="#">Polyethylene Fittings</a></li><li><a href="#">Pool Chemicals</a></li><li><a href="#">Electrical Testers & Tools</a></li></ul>'
+ '</li><li class="category-suggestion"><a href="#">voltage tester</a></li><li class="category-suggestion"><a href="#">tester</a>'
+ '</li><li class="category-suggestion"><a href="#">electrical tester</a></li></ul></div><div class="suggestion__box__panel--prod sm-not-appear">'
+ '<div class="suggestion__query-text">Top results for <i>"test"</i></div><div id="top-products" class="suggestion__top-list">'
+ '<div class="suggestion-top"><img class="suggestion-top__img" src="https://via.placeholder.com/130x130.png" /><div class="suggestion-top__name">Test Cap 3(Polyethylene)</div></div>'
+ '<div class="suggestion-top"><img class="suggestion-top__img" src="https://via.placeholder.com/130x130.png" /><div class="suggestion-top__name">Test Cap 3(Polyethylene)</div>'
+ '</div><div class="suggestion-top"><img class="suggestion-top__img" src="https://via.placeholder.com/130x130.png" /><div class="suggestion-top__name">Test Cap 3(Polyethylene)</div>'
+ '</div></div></div></div></div>';

/**
 *  'art' Result
 * ----------------
 * [ CategorySuggestion { id: '1334134', name: 'Arts, Crafts & Sewing' },
 * CategorySuggestion { id: '1334134_5899871', name: 'Art Supplies' },
 *  CategorySuggestion { id: '1334134_7616708', name: 'Red Heart Yarn' } ]
 */

export const searchExpectedDom = '<div id="suggestion-box" class="suggestion__box"><div class="suggestion__box__panel"><div class="suggestion__box__panel--cat">'
+ '<ul id="category-box" class="suggestion__cat-list"><li id="query" class="active"><a href="#"><b id="query-object">art</b></a>'
+ '<ul id="top-categories" class="suggestion__cat-active-list"><li><a href="#">Print Art</a></li><li><a href="#">Canvas Wall Art</a></li><li><a href="#">Photo Products</a></li></ul>'
+ '</li><li class="category-suggestion" value="1334134"><a href="#"><b>Art</b>s, Crafts &amp; Sewing</a></li><li class="category-suggestion" value="2637"><a href="#">P<b>art</b>y &amp; Occasions</a>'
+ '</li><li class="category-suggestion" value="6735581"><a href="#">Walm<b>art</b> for Business</a></li></ul></div><div class="suggestion__box__panel--prod sm-not-appear">'
+ '<div class="suggestion__query-text">Top results for <i>"test"</i></div><div id="top-products" class="suggestion__top-list">'
+ '<div class="suggestion-top"><a href="http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FHigh-Quality-4-x-4-Prints%2F29464413%3Faffp1%3DV5HnCXjjgpH6i696kn_Ln6704pcEtOH5Tnv59xa5G3I%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi"><img class="suggestion-top__img" src="https://i5.walmartimages.com/asr/ba5cb67c-1c35-4f58-b26b-5bca1602fa3e_2.7d6f33521b3654c22d66d075cf64c8b6.png?odnHeight=100&amp;odnWidth=100&amp;odnBg=FFFFFF"><div class="suggestion-top__name">High-Quality 4 x 4 Prints</div></a></div><div class="suggestion-top"><a href="http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2F8x10-Gallery-Wrap-Canvas%2F13070185%3Faffp1%3DV5HnCXjjgpH6i696kn_Ln6704pcEtOH5Tnv59xa5G3I%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi"><img class="suggestion-top__img" src="https://i5.walmartimages.com/asr/3c3707f1-9653-4fcf-b75c-0eaaa63abdca_1.4937faecd1bb93419bdf0b131facb96b.jpeg?odnHeight=100&amp;odnWidth=100&amp;odnBg=FFFFFF"><div class="suggestion-top__name">8x10 Gallery Wrap Canvas</div></a></div><div class="suggestion-top"><a href="http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2F16x20-Gallery-Wrap-Canvas%2F5027120%3Faffp1%3DV5HnCXjjgpH6i696kn_Ln6704pcEtOH5Tnv59xa5G3I%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi"><img class="suggestion-top__img" src="https://i5.walmartimages.com/asr/a83e64d4-50c2-4753-a277-d1d9441446c0_1.022f4c073bf1633bd8af3d24eb8ebb50.jpeg?odnHeight=100&amp;odnWidth=100&amp;odnBg=FFFFFF">'
+ '<div class="suggestion-top__name">16x20 Gallery Wrap Canvas</div></a></div></div></div></div></div>';
