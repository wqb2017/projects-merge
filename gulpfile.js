var gulp = require('gulp');
var del = require('del');

/**
 * 深圳-运营平台
 * @使用：npm run shenzhen-yunying
 */
gulp.task('shenzhen-yunying', function() {
  del(['dist/shenzhen/yunying/**/*']); //生成生产环境前，先删除文件
  gulp
    .src(['dev/standard/yunying/**', 'dev/shenzhen/yunying/**']) //该任务针对的文件,【注释：被覆盖的项目一定要在覆盖项目的前面】
    .pipe(gulp.dest('dist/shenzhen/yunying')); //生成生产环境代码
});
