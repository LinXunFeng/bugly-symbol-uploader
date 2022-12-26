# Bugly符号表上传工具

## 安装

全局安装

```shell
npm install buglySymbolUploader -g 
```

## 使用

使用 `init` 指令创建一份配置文件

```shell
buglySymbolUploader init
```

```json
{
  "appId": "",
  "appKey": "",
  "bundleId": "",
  "version": "",
  "platform": "IOS",
  "buglyqqUploadSymbolJarPath": ".../buglyqq-upload-symbol.jar",
  "symbolZipPath": ".../x.x.x.app.dSYM.zip",
  "symbols": [
    "xxx.app.dSYM",
    "xxx.framework.dSYM",
  ]
}
```

```shell
buglySymbolUploader -f config.json
```