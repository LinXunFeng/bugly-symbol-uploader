import * as path from 'path';

/// 获取static下的文件路径对象
function staticFilePath(filepath: string): string {
  const staticDirPosition = '../static';
  return path.resolve(__dirname, staticDirPosition, filepath);
}

export {
  staticFilePath,
}