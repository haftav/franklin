const axios = require('axios');
require('dotenv').config({ path: __dirname + '/./../.env' });

const { NEWS_API_KEY } = process.env;

module.exports = async source => {
  try {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&language=en&pageSize=20`;
    if (source) url += `&sources=${source}`
    const results = await axios({
      method: 'get',
      url,
      params: {
        format: 'json',
      },
    });
    if (results.data.status === 'error') {
      throw new Error(results.data.message);
    } else {
      return results.data.articles;
    }
  } catch (err) {
    console.error(err);
  }
};
