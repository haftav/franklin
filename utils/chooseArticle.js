const inquirer = require('inquirer');

module.exports = articles => {
  const choices = articles.map(article => {
        const { name: source } = article.source;
        const { title: name, description, publishedAt: date, content, url } = article;
        return { 
            name,
            value: {
                title: name,
                description,
                date,
                content,
                source,
                url
            },
            short: name
        };
  })
  return inquirer.prompt([
    {
      type: 'list',
      name: 'articles',
      message: 'Top Articles',
      choices
    },
  ]);
};
