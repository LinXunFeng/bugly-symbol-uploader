import _ from 'lodash';
import { Command } from 'commander';
import {
  upload,
  initConfigFile,
} from './actions.js';

const registerCommands = (program: Command) => {
  program
    .option("-f, --file [value]", "根据JSON配置文件上传符号表")
    .action((options) => {
      // const options = program.opts();
      // let filepath = options.file;
      let filepath = options.file;
      filepath = _.isString(filepath) ? filepath : null;
      upload(filepath);
    });

  program
    .command("init [path]")
    .description("创建配置文件")
    .action(initConfigFile);
}

export {
  registerCommands
}