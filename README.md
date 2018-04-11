# projects-merge

## 目录结构

```html
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

## 实现功能

1. 差异化项目合并
1. babel 编译 js
1. 自动刷新浏览器

## 前置条件

* 依赖安装

```bash
# 安装 gulp-cli，为了使用gulp命令
$ npm install gulp-cli -g

# 进入当前目录安装开发所需依赖
$ npm install
```

## 测试

* 已提供配置好测试任务，安装依赖完成后直接在命令行输入`gulp test`，

## 配置文件

* gulpTaskConfig

  | key       | value   | 是否必填 | 说明                                                        |
  | --------- | ------- | -------- | ----------------------------------------------------------- |
  | taskname  | string  | 是       | 任务名，用于在命令行输入，例如： gulp test                  |
  | standard  | string  | 是       | 指定标准版位置                                              |
  | different | string  | 是       | 指定差异化版本路径                                          |
  | target    | string  | 是       | 指定打包生产目录路径                                        |
  | port      | string  | 否       | 指定端口位置，用于同时启动多个任务时需要配置                |
  | note      | string  | 否       | 任务说明                                                    |
  | needBabel | boolean | 否       | 是否需要 babel 编译，默认不开启，老项目某些代码不能通过编译 |
