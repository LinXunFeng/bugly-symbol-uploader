#! /usr/bin/env node

import figlet from 'figlet';
import { Command } from 'commander';

import { helpOptions } from './core/help.js';
import { registerCommands } from './core/commands.js';
// https://stackoverflow.com/a/67701490/8577739
import { LIB_VERSION } from './version.js';

console.log(figlet.textSync("Bugly Symbol"));

const program = new Command();
program
  .version(LIB_VERSION)
  .description("Bugly符号表上传工具");

// 帮助信息
helpOptions(program);
// 注册指令
registerCommands(program);
program.parse(process.argv);
// const options = program.opts();