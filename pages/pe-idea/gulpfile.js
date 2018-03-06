//导入工具包 require('node_modules里对应模块')
//引入 gulp
var gulp = require('gulp'),
// 引入组件
  //jshint = require('gulp-jshint'),// 任务：检查Javascript脚本
  //less = require('gulp-less'),// 任务：编译less文件
  //concat = require('gulp-concat'),// 任务：合并Javascript
  uglify = require('gulp-uglify'),// 任务：压缩合并后的Javascript
  rename = require('gulp-rename'),// 任务：重命名合并后的Javascript
  //liveReload=require('gulp-livereload'),// 任务：自动刷新页面
  cleanCss = require('gulp-clean-css'),// 任务：压缩CSS文件
  //notify = require('gulp-notify');// 任务：提示错误
  plumber = require('gulp-plumber');// 任务：出现异常并不终止watch事件

//定义一个检查脚本任务lint（自定义任务名称）
/*****
 gulp.task('lint', function() {
    gulp.src('source/**\/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));//脚本语法检查使用reporter报告错误信息
});
 *****/

/*****
 //将less文件编译css文件，并且实时刷新页面
 gulp.task('less', function () {
    gulp.src('source/styles/less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))// 提示错误
        .pipe(less())
        .pipe(gulp.dest('source/styles/css'))

});
 *****/

//压缩CSS文件
gulp.task('cleanCss', function () {
  gulp.src(['source/styles/*.css', '!source/styles/*.min.css'])//数组后一项是为了防止同一文件夹下的重复压缩
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))//后缀增加min,每个文件重命名自动确定
    .pipe(gulp.dest('dist/styles'))
  //.pipe(liveReload())
});

//合并，压缩、重命名js文件
gulp.task('scripts', function () {
  gulp.src(['source/scripts/*.js', '!source/scripts/*.min.js'])//数组后一项是为了防止同一文件夹下的重复压缩
    .pipe(plumber())// 提示错误但不通知
    //.pipe(concat('all.js'))
    //.pipe(gulp.dest('source/scripts'))
    .pipe(rename({suffix: '.min'}))//rename应该在dest之前
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

//监听任务，并且调用listen方法实现实时刷新页面
//监听事件需要保证命令提示符处于打开状态，关闭后监听事件结束
gulp.task('watching', function () {
  //liveReload.listen();//调用listen方法
  gulp.watch(['source/**/*.*'], ['cleanCss', 'scripts']);

});

// 默认任务
gulp.task('default', ['cleanCss', 'scripts', 'watching']);










