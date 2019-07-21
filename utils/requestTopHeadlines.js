const axios = require('axios');
require('dotenv').config({ path: __dirname + '/./../.env' });

const { NEWS_API_KEY } = process.env;
const { red, yellow } = require('chalk');

module.exports = async source => {
  try {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&language=en&pageSize=20`;
    if (source) url += `&sources=${source}`;
    const results = await axios({
      method: 'get',
      url,
      params: {
        format: 'json',
      },
    });
    if (results.data.status === 'error') {
      throw new Error('You is error');
    } else {
      return results.data.articles;
    }
  } catch (err) {
    if (err.response.data.code === 'sourceDoesNotExist') {
      console.error(red(`The news source you requested ${yellow(`(${source})`)} doesn't seem to exist. Please try again with a valid news source.\nTo see a list of valid news sources, use the 'sources' command.`));
    }
    process.exit(1);
  }
};
