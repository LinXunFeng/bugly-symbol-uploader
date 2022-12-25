import fs from 'fs';
import ConfigModel from "../models/config_model.js";

function readConfig(filepath: string): ConfigModel {
  // 解析json
  const content = fs.readFileSync(filepath!).toString();
  const config = JSON.parse(content);
  // console.log(`content - ${config.platform}`);
  return config;
}

export {
  readConfig,
}