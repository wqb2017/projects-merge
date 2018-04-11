var gulp = require('gulp');
var del = require('del');
var path = require('path');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var babel = require('gulp-babel');

var gulpTaskConfig = require('./gulpTaskConfig.json');

gulpTaskConfig.forEach(item => {
  const DEL = `${item.taskname}_del`;
  const BUILD = `${item.taskname}_build_without_js`;
  const BUILDJS = `${item.taskname}_build_with_js`;
  const SERVER = `${item.taskname}_server`;
  gulp.task(DEL, function() {
    del([`${item.target}/**/*`]);
  });
  /**合并除js以外文件 */
  gulp.task(BUILD, function() {
    gulp.src([`${item.standard}/**/!(*.js)`, `${item.different}/**/!(*.js)`]).pipe(gulp.dest(item.target));
  });
  /**babel 编译js */
  gulp.task(BUILDJS, function() {
    const paths = gulp.src([`${item.standard}/**/*.js`, `${item.different}/**/*.js`]);
    if (item.needBabel) {
      paths
        .pipe(
          babel({
            presets: ['@babel/env'],
          }),
        )
        .pipe(gulp.dest(item.target));
    } else {
      paths.pipe(gulp.dest(item.target));
    }
  });

  /**起server */
  gulp.task(SERVER, function() {
    browserSync({
      server: {
        baseDir: `${item.target}`,
        reloadDebounce: 1000,
      },
      port: item.port || 8080,
    });
  });
  gulp.task(item.taskname, function() {
    gulp.run(DEL, BUILD, BUILDJS, SERVER);
    gulp.watch(`${item.different}/**`, [BUILD, BUILDJS]).on('change', reload);
  });
});
