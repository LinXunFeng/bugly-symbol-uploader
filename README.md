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

`Bugly` 相关的参数就不做说明了

|`字段`|描述|
|-|-|
|`buglyqqUploadSymbolJarPath`|`buglyqq-upload-symbol.jar` 文件的路径|
|`symbolZipPath`|符号表的压缩文件|
|`symbols`|需要上传的所有符号表|

```shell
# buglySymbolUploader -f 配置文件
buglySymbolUploader -f config.json
```