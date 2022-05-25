<h1 align="center">cmyr-find-replace </h1>
<p>
  <a href="https://www.npmjs.com/package/cmyr-find-replace" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/cmyr-find-replace.svg">
  </a>
  <a href="https://github.com/CaoMeiYouRen/cmyr-find-replace/actions?query=workflow%3ARelease" target="_blank">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/CaoMeiYouRen/cmyr-find-replace/Release">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D12-blue.svg" />
  <a href="https://github.com/CaoMeiYouRen/cmyr-find-replace#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/cmyr-find-replace/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/cmyr-find-replace/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


> 草梅批量查找和替换器，一个可以批量查找和替换的 cli 
>
> 遍历指定文件夹下的指定文件，允许替换指定内容。
>
> 默认忽略 `node_modules`下的所有内容

### 🏠 [主页](https://github.com/CaoMeiYouRen/cmyr-find-replace#readme)

[https://github.com/CaoMeiYouRen/cmyr-find-replace#readme](https://github.com/CaoMeiYouRen/cmyr-find-replace#readme)


### ✨ [Demo](https://github.com/CaoMeiYouRen/cmyr-find-replace#readme)

[https://github.com/CaoMeiYouRen/cmyr-find-replace#readme](https://github.com/CaoMeiYouRen/cmyr-find-replace#readme)


## 依赖要求


- node >=12

## 安装

```sh
npm install cmyr-find-replace -g
```

## 使用

```sh
cfr -h  # 查看帮助信息
cfr -i **/*.js -f TODO -o output.txt # 查找 当前目录下的所有 js 文件，找出包含 TODO 关键的文件，并将文件路径输出到 output.txt
```

```txt
草梅批量查找和替换器

Options:
  -v, --version            output the version number
  -d, --debug              debug
  -i, --input <dir>        指定扫描目录，支持 glob 语法
  -o, --output [path]      指定输出结果的路径，默认为当前目录的 output.txt
  -f, --find <keyword>     查找的关键词，默认为查找模式
  -r, --replace <keyword>  替换后的关键词，如果设置该项则为替换模式
  -h, --help               display help for command
```

## 开发

```sh
npm run dev
```

## 编译

```sh
npm run build
```

## Lint

```sh
npm run lint
```

## Commit

```sh
npm run commit
```


## 作者


👤 **CaoMeiYouRen**

* Website: [https://blog.cmyr.ltd/](https://blog.cmyr.ltd/)
* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)


## 🤝贡献

欢迎 贡献、提问或提出新功能！<br />如有问题请查看 [issues page](https://github.com/CaoMeiYouRen/cmyr-find-replace/issues). <br/>贡献或提出新功能可以查看[contributing guide](https://github.com/CaoMeiYouRen/cmyr-find-replace/blob/master/CONTRIBUTING.md).

## 💰支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 📝 License

Copyright © 2022 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/cmyr-find-replace/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [cmyr-template-cli](https://github.com/CaoMeiYouRen/cmyr-template-cli)_
