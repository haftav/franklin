const { green, blue } = require('chalk');
const requestTopHeadlines = require('../utils/requestTopHeadlines');
const chooseArticle = require('../utils/chooseArticle');

module.exports = async args => {
  try {
    const newsSource = args.source || args.s;
    const headlines = await requestTopHeadlines(newsSource);
    const { articles: answer } = await chooseArticle(headlines);
    const { title, date, description, source, url } = answer;

    console.log(green(`\nSource: ${source} | Date published: ${date}\n`));
    console.log(blue(title.toUpperCase() + '\n'));
    console.log(description + '\n');
    console.log(url);
  } catch (err) {
    console.error(err);
  }
};
