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

1. 全局安装 ecaray-cli
   [ecaray-cli 传送门](https://github.com/wqb2017/ecaray-cli)

```js
$ npm install ecaray-cli -g  
```

2. 新增本地 projects-merge 模板

```js
## ecaray add

1. Set the custom name of the template: projects-merge(自定义模板)
2. Owner/name of the template: wqb2017/projects-marge(github 模板)
3. Branch of the template: master(选中的分支)
```

3. 初始化模板

```js
## ecaray init
1. Template name: projects-merge(初始化自定义模板)
2. Project name: qianqianjinfu(创建项目名称)
3. Where to init the project: ./ (创建项目存储地址)
```
