export default interface ConfigModel {
  appId: "";
  appKey: "";
  bundleId: "";
  version: "";
  platform: "";
  /// 符号表文件路径
  symbolZipPath: "";
  /// buglyqq-upload-symbol.jar文件路径
  buglyqqUploadSymbolJarPath: "";
  /// 要上传的符号表
  symbols: string[]
}