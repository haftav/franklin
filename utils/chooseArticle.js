const inquirer = require('inquirer');
const { green, blue } = require('chalk');

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
      message: green('Top Articles\n'),
      choices
    },
  ]);
};
