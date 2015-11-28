var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './src/scss/*.scss';
var output = './dist/css';

gulp.task('sass', function () {
	return gulp
	// Find all `.scss` files from the `./src/scss` folder
	.src(input)
	// Run Sass on those files
	.pipe(sass())
	// Write the resulting CSS in the output folder
	.pipe(gulp.dest(output));
});
