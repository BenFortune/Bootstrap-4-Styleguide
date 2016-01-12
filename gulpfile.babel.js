'use strict';

import gulp from 'gulp';
import gSass from 'gulp-sass';
import gScssLint from 'gulp-scss-lint';
import gConcat from 'gulp-concat';

const sassPaths = {
	src: './src/scss/**/*.scss',
	dest: './build/css'
}

const jsPaths = {
	src: './src/js/*.js',
	dest: './build/js'
}

gulp.task('sass', () => {
	return gulp.src(sassPaths.src)
	.pipe(gSass())
	.pipe(gulp.dest(sasPaths.dest));
});

gulp.task('scss-lint', () => {
	return gulp.src(sassPaths.src)
	.pipe(gScssLint({
		'config': 'scss-lint.yml',
	}));
});

gulp.task('styles', () => {
	return gulp.src(sassPaths.src)
	.pipe(gScssLint({
		'config': 'scss-lint.yml',
	}))
	.pipe(gSass())
	.pipe(gulp.dest(sassPaths.dest));
});

gulp.task('scripts', () => {
	return gulp.src(jsPaths.src)
	.pipe(gConcat('scripts.js'))
	.pipe(gulp.dest(jsPaths.dest));
});
