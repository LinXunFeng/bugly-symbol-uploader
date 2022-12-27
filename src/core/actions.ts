import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import _ from 'lodash';

import { haveJavaEnv } from '../utils/env_utils.js';
import { staticFilePath } from '../utils/file_utils.js';
import { readConfig } from '../utils/config.utils.js';
import { terminalSpawn } from '../utils/terminal.js';
import { unZip } from '../utils/archiver_utils';
import { reMakeDirSync, removeDirOrFileSync } from '../utils/file_utils';

/// 上传符号表
const upload = async (filepath: string | null) => {
  if (_.isEmpty(filepath)) {
    console.log('请输入JSON配置文件的路径');
    return;
  }
  const isSuccess = await haveJavaEnv();
  if (!isSuccess) {
    console.log('没有JAVA环境');
    return;
  }
  const config = readConfig(filepath!);
  // console.log(`config -- ${config.platform}`);
  const {
    appId,
    appKey,
    bundleId,
    version,
    platform,
    buglyqqUploadSymbolJarPath,
    symbolZipPath,
    symbols,
  } = config;
  const symbolDirPath = path.dirname(symbolZipPath);
  const tempDsymPath = path.resolve(symbolDirPath, 'temp.dSYM');
  // 重建temp目录
  reMakeDirSync(tempDsymPath);
  // 解压
  await unZip(symbolZipPath, tempDsymPath);

  for (let index = 0; index < symbols.length; index++) {
    const symbolName = symbols[index];
    const symbolFilePath = path.resolve(tempDsymPath, symbolName);
    await terminalSpawn('java', [
      '-jar', `${buglyqqUploadSymbolJarPath}`,
      '-appid', `${appId}`,
      '-appkey', `${appKey}`,
      '-bundleid', `${bundleId}`,
      '-version', `${version}`,
      '-platform', `${platform}`,
      '-inputSymbol', `${symbolFilePath}`,
    ]);
  }
  removeDirOrFileSync(tempDsymPath);
}

/// 创建配置文件
const initConfigFile = (targetPath: string | null) => {
  const templatePath = staticFilePath('template/config.json');;
  const destDirPath = targetPath || process.cwd();
  const destFilePath = path.resolve(destDirPath, 'config.json');
  // console.log(`${templatePath} -- ${destFilePath}`);
  fs.copyFileSync(templatePath, destFilePath);
}

export {
  upload,
  initConfigFile,
}