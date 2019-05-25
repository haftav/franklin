const requestTopHeadlines = require('../utils/requestTopHeadlines');

module.exports = async (args) => {
    console.log('Top Headlines');

    const headlines = await requestTopHeadlines();
    headlines.forEach(headline => {
        const { name } = headline.source;
        const { title, description, publishedAt: date, content } = headline;

        const outputText = `
        TITLE: ${title.toUpperCase()}           
        SOURCE: ${name}
        -----------------------------------------
        ${description}
        `

        console.log(outputText);
    })
}