var gulp    = require('gulp');
var util    = require('gulp-util');
var concat  = require('gulp-concat');
var compass = require('gulp-compass');
var browserSync = require("browser-sync").create();
var rtlcss     = require( 'gulp-rtlcss' );
var rename     = require( 'gulp-rename' );
var uglify     = require('gulp-uglify');
var minifycss  = require( 'gulp-minify-css' );

var sassSources = ['sass/style.scss'];
// var jsSources = [
// 	'src/scripts/jquery-3.3.1.js',
// 	'src/scripts/bootstrap.js',
// 	'src/scripts/jquery.scrollbar.js',
// 	'src/scripts/slick.js',
// 	'src/scripts/wow.js',
// 	'src/scripts/main.js'
// ];

gulp.task('sass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'sass',
			images: 'images',
			style: 'compressed',
			sourcemap: true,
			require: ['susy', 'breakpoint']
		}))
		.on('error', util.log)
		.pipe( gulp.dest('css') )

		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))

		.pipe( browserSync.reload({stream: true}) )
});

gulp.task('sync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', function(){
	//gulp.watch(jsSources, ['js']);
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', [ 'sass', 'watch', 'sync']);