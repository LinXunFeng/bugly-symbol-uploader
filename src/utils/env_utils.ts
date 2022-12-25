import * as cp from 'child_process';
import * as _ from 'lodash';

/// 是否有java环境
function haveJavaEnv(): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    cp.exec('java -h', function (err: cp.ExecException | null, stdout: string, stderr: string) {
      // console.log(`err -- ${err}; stdout -- ${stdout}; stderr -- ${stderr}`);
      if (err == null && !_.isEmpty(stderr)) {
        // console.log('有 java 环境');
        resolve(true);
      } else {
        // console.log('请先安装JAVA环境');
        resolve(false);
      }
    });
  });
}

export {
  haveJavaEnv
}