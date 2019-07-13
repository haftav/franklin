const axios = require('axios');
require('dotenv').config({ path: __dirname + '/./../.env' });

const { NEWS_API_KEY } = process.env;

module.exports = async () => {
  try {
    const results = await axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&language=en&pageSize=20`,
      params: {
        format: 'json',
      },
    });
    return results.data.articles;
  } catch (err) {
    console.error(err);
  }
};
