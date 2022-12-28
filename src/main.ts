#! /usr/bin/env node

import figlet from 'figlet';
import { Command } from 'commander';

import { helpOptions } from './core/help.js';
import { registerCommands } from './core/commands.js';
// https://stackoverflow.com/a/67701490/8577739
import { LIB_VERSION } from './version.js';

console.log(figlet.textSync("buglysu", {
  horizontalLayout: 'fitted'
}).green);

const program = new Command();
program
  .version(LIB_VERSION, '-v, --version', '查看当前版本')
  .helpOption('-h, --help', '查看帮助信息')
  .description("Bugly上传符号表辅助工具");

// 帮助信息
helpOptions(program);
// 注册指令
registerCommands(program);
program.parse(process.argv);
// const options = program.opts();