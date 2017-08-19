var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('jshint', function(){
	gulp.src('./src/js/**/*.js')
	.pipe(plugins.jshint())
	.pipe(plugins.jshint.reporter());
});

gulp.task('reload', function(){
	gulp.src('./src/**/*')
	.pipe(plugins.connect.reload());
});

gulp.task('less', function(){
	gulp.src('./src/less/**/*.less')
	.pipe(plugins.less())
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('sass', function(){
	gulp.src('./src/sass/**/*.scss')
	.pipe(plugins.sass())
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('jade', function(){
	gulp.src('./src/jade/**/*.jade')
	.pipe(plugins.jade({
		pretty: true
	}))
	.pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function(){
	gulp.watch('./src/**/*', ['reload']);
	gulp.watch('./src/jade/**/*.jade', ['jade']);
	gulp.watch('./src/less/**/*.less', ['less']);
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', function(){
	gulp.run('jshint', 'reload', 'less', 'sass','jade', 'watch');
});

gulp.task('clean', function(){
	gulp.src('dist')
	.pipe(plugins.clean());
});
