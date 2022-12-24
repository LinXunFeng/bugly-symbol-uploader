#! /usr/bin/env node

import figlet from 'figlet';
import { Command } from 'commander';

console.log(figlet.textSync("Bugly Symbol"));

const program = new Command();

program
  .version("0.0.1")
  .description("Bugly符号表上传工具")
  .option("-l, --ls [value]", "列出所有")
  .parse(process.argv);

const options = program.opts();

if (options.ls) {
  console.log("ls命令");
}

if (options.mkdir) {
  console.log("mkdir命令");

}