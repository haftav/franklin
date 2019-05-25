const axios = require('axios');
require('dotenv').config();

const { NEWS_API_KEY } = process.env;

module.exports = async language => {
  const results = await axios({
    method: 'get',
    url: `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&language=en&pageSize=5`,
    params: {
      format: 'json',
    },
  });
  return results.data.articles;
};
