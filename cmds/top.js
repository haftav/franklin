const requestTopHeadlines = require('../utils/requestTopHeadlines');
const chooseArticle = require('../utils/chooseArticle');

module.exports = async args => {
  const headlines = await requestTopHeadlines();
  const { articles: answer } = await chooseArticle(headlines);
  const { title, date, description, source, url } = answer;

  console.log(title.toUpperCase() + '\n');
  console.log(`Source: ${source} | Date published: ${date}\n`);
  console.log(description + '\n');
  console.log(url);

//   headlines.forEach(headline => {
//     const { name } = headline.source;
//     const { title, description, publishedAt: date, content } = headline;

//     const outputText = `
//         TITLE: ${title.toUpperCase()}           
//         SOURCE: ${name}
//         -----------------------------------------
//         ${description}
//         `;

//     // console.log('Top Headlines');
//     // console.log(outputText);
//   });
};
