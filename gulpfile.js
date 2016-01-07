const gulp = require('gulp');
const gSass = require('gulp-sass');
const gScssLint = require('gulp-scss-lint');
const gConcat = require('gulp-concat');

const input = './src/scss/**/*.scss';
const output = './dist/css';

const jsInput = './src/js/*.js';
const jsOutput = './dist/js';

gulp.task('sass', function () {
	return gulp.src(input)
	.pipe(gSass())
	.pipe(gulp.dest(output));
});

gulp.task('scss-lint', function() {
	return gulp.src(input)
	.pipe(gScssLint({
		'config': 'scss-lint.yml',
	}));
});

gulp.task('styles', function() {
	return gulp.src(input)
	.pipe(gScssLint({
		'config': 'scss-lint.yml',
	}))
	.pipe(gSass())
	.pipe(gulp.dest(output));
});

gulp.task('scripts', function() {
	return gulp.src(jsInput)
	.pipe(gConcat('scripts.js'))
	.pipe(gulp.dest(jsOutput));
});
