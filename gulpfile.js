const gulp = require('gulp');
const sass = require('gulp-sass');
const scssLint = require('gulp-scss-lint');

const input = './src/scss/*.scss';
const output = './dist/css';

gulp.task('sass', function () {
	return gulp
	// Find all `.scss` files from the `./src/scss` folder
	.src(input)
	// Run Sass on those files
	.pipe(sass())
	// Write the resulting CSS in the output folder
	.pipe(gulp.dest(output));
});

gulp.task('scss-lint', function() {
	return gulp
	.src(input)
	.pipe(scssLint({
		'config': 'scss-lint.yml',
	}));
});
