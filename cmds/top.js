const requestTopHeadlines = require('../utils/requestTopHeadlines');
const chooseArticle = require('../utils/chooseArticle');

module.exports = async args => {
  const headlines = await requestTopHeadlines();
  const article = await chooseArticle(headlines);
  headlines.forEach(headline => {
    const { name } = headline.source;
    const { title, description, publishedAt: date, content } = headline;

    const outputText = `
        TITLE: ${title.toUpperCase()}           
        SOURCE: ${name}
        -----------------------------------------
        ${description}
        `;

    // console.log('Top Headlines');
    // console.log(outputText);
  });
};
