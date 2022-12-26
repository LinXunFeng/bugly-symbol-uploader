import path from 'path';
import fs from 'fs';

/// 获取static下的文件路径对象
const staticFilePath = (filepath: string): string => {
  const staticDirPosition = '../static';
  return path.resolve(__dirname, staticDirPosition, filepath);
}

/// 重新创建目录
const reMakeDirSync = (dirPath: string) => {
  // 删除之前解压的目录
  removeDirOrFileSync(dirPath);
  fs.mkdirSync(dirPath);
}

/// 删除目录/文件
const removeDirOrFileSync = (targetPath: string) => {
  // 删除之前解压的目录
  const isExists = fs.existsSync(targetPath);
  if (isExists) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

export {
  staticFilePath,
  reMakeDirSync,
  removeDirOrFileSync,
}