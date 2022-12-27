import { Command } from "commander"
import colors from 'colors';

const log = console.log;
const helpOptions = (program: Command) => {
  program.on('--help', () => {
    log('');
    log('Info:');
    log(colors.cyan('  Author: LinXunFeng'));
    log(colors.cyan('  GitHub: https://github.com/LinXunFeng'));
    log(colors.cyan('  Repository: https://github.com/LinXunFeng/bugly-symbol-uploader'));
  })
}

export {
  helpOptions,
}