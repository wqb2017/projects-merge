# projects-merge

## precondition

[install: git](https://git-scm.com/downloads)

[install: nodejs](http://nodejs.cn/download/)

## Installation

cd project root

1. $ git clone https://github.com/wqb2017/projects-merge.git
2. $ npm install.
3. $ npm run shenzhen-yunying

## structure

```js
|- project-root 项目跟目录
      |-gulpfile.js 配置文件
      |-package.json 依赖文件
      |-readme.md 说明文件
      |-dev 开发环境
        |-standard 标准项目
            |-yunying 运营平台
            |-jituan 集团平台
        |-shenzhen 分支项目
            |-yunying 运营平台
            |-jituan 集团平台
      |-dist 生产环境
```

## 使用 ecaray-cli 架手架建模板

$ npm install ecaray-cli -g [ecaray-cli 传送门](https://github.com/wqb2017/ecaray-cli)

$ ecaray init

$ Template name: projects-merge(初始化自定义模板)

$ Project name: qianqianjinfu(创建项目名称 qianqianjinfu)

$ Where to init the project: ./ (创建项目存储地址,直接回车默认当前文件跟目录)
