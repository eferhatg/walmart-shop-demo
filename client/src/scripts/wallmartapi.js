export const WM_API_ENDPOINT = 'http://localhost:3000/api';

// TAXONOMY API ENDPOINT PARAMS
export const WM_API_TAXONOMY_PATH = '/taxonomy';
export const WM_API_TAXONOMY_QUERYSTRINGS = 'format=json';
export const WM_API_TAXONOMY_FULL_PATH = `${WM_API_ENDPOINT}${WM_API_TAXONOMY_PATH}?${WM_API_TAXONOMY_QUERYSTRINGS}`;

export const WM_API_TAXONOMY_QUERYSTRINGS_OBJECT = { format: 'json' };

// SEARCH API ENDPOINT PARAMS
export const WM_API_SEARCH_PATH = '/search';
export const WM_API_SEARCH_QUERYSTRINGS = 'query={{q}}&format=json&sort=bestseller';
export const WM_API_SEARCH_FULL_PATH = `${WM_API_ENDPOINT}${WM_API_SEARCH_PATH}?${WM_API_SEARCH_QUERYSTRINGS}`;

export const WM_API_SEARCH_QUERYSTRINGS_OBJECT = { format: 'json', query: '', sort: 'bestseller' };
