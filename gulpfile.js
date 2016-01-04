const gulp = require('gulp');
const sass = require('gulp-sass');
const scssLint = require('gulp-scss-lint');

const input = './src/scss/**/*.scss';
const output = './dist/css';

gulp.task('sass', function () {
	return gulp
	.src(input)
	.pipe(sass())
	.pipe(gulp.dest(output));
});

gulp.task('scss-lint', function() {
	return gulp
	.src(input)
	.pipe(scssLint({
		'config': 'scss-lint.yml',
	}));
});

gulp.task('styles', function() {
	return gulp
	.src(input)
	.pipe(scssLint({
		'config': 'scss-lint.yml',
	}))
	.pipe(sass())
	.pipe(gulp.dest(output));
})
