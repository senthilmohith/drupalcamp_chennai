var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var css = {
	src: './scss/style.scss',
	out: './css/',
	watch: './scss/**/*.scss',
	devOpts: {
    outputStyle: 'expanded',
    precision: 8,
    errLogToConsole: true
  },
  prodOpts: {
    outputStyle: 'compressed',
    precision: 8,
    errLogToConsole: true
  }
};

gulp.task("sass", function() {
  return gulp
    .src(css.src)
    .pipe(sass(css.devOpts))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 4 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest(css.out));
});

gulp.task("watch", function() {
  gulp.watch(css.watch, gulp.series("sass"));
});

gulp.task("default", gulp.series("watch", gulp.parallel("watch")));
