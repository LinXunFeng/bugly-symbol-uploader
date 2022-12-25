export default interface ConfigModel {
  appId: "";
  appKey: "";
  bundleId: "";
  version: "";
  platform: "";
  /// 符号表文件路径
  path: "";
  /// 要上传的符号表
  symbols: string[]
}