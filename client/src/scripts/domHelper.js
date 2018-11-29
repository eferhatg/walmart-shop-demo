export const ready = (callback) => {
  // in case the document is already rendered
  if (document.readyState !== 'loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState === 'complete') callback();
    });
  }
};

// export const htmlToElements = (html) => {
//   const template = document.createElement('template');
//   template.innerHTML = html;
//   return template.content.childNodes;
// };


export const delay = (callback, ms) => {
  let timer = 0;
  return () => {
    const context = this;
    /*eslint-disable */
    const args = arguments;
    /* eslint-enable */
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, ms || 0);
  };
};
