const minimist = require('minimist');

module.exports = () => {
  process.stdout.write('\u001b[2J\u001b[0;0H');
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || 'help';

  if (args.help || args.h) {
    cmd = 'help';
  }

  if (args.version || args.v) {
    cmd = 'version';
  }

  switch (cmd) {
    case 'help':
      require('./cmds/help')(args);
      break;
    case 'top':
      require('./cmds/top')(args);
      break;
    case 'version':
      require('./cmds/version')(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command.`);
      break;
  }
};
