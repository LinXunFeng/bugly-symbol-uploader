# Bugly符号表上传辅助工具

```shell
  _                    _
 | |__   _   _   __ _ | | _   _  ___  _   _
 | '_ \ | | | | / _` || || | | |/ __|| | | |
 | |_) || |_| || (_| || || |_| |\__ \| |_| |
 |_.__/  \__,_| \__, ||_| \__, ||___/ \__,_|
                |___/     |___/
Usage: buglysu [options] [command]

Bugly上传符号表辅助工具

Options:
  -v, --version       查看当前版本
  -f, --file [value]  根据JSON配置文件上传符号表
  -h, --help          查看帮助信息

Commands:
  init [path]         创建配置文件

Info:
  Author: LinXunFeng
  GitHub: https://github.com/LinXunFeng
  Repository: https://github.com/LinXunFeng/bugly-symbol-uploader
```

## 安装

全局安装

```shell
npm i buglysu -g
```

## 使用

使用 `init` 指令创建一份配置文件

```shell
buglysu init
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
|`buglyqqUploadSymbolJarPath`|`buglyqq-upload-symbol.jar` 文件的路径（请使用绝对路径）|
|`symbolZipPath`|符号表的压缩文件（请使用绝对路径）|
|`symbols`|需要上传的所有符号表（空则全部上传）|

```shell
# buglysu -f 配置文件
buglysu -f config.json
```