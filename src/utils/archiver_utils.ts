import compressing from 'compressing';

const unZip = async (zipPath: string, targetPath: string) => {
  await compressing.zip.uncompress(zipPath, targetPath);
}

export {
  unZip,
}