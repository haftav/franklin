const menus = {
    main: `
      news [command] <options>
  
      top .............. show top news articles
      version ............ show package version
      help ............... show help menu for a command`,
  
    top: `
      news top <options>
  
      --source, -s..... the source to use`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }