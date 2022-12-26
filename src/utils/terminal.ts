import { spawn } from 'child_process';

const terminalSpawn = (command: string, args: Array<string>) => {
  return new Promise<void>((resolve, reject) => {
    const childProcess = spawn(command, args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {
      resolve();
    })
  });
}

export {
  terminalSpawn
}