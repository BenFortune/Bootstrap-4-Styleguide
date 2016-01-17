'use strict';

import gulp from 'gulp';
import gSass from 'gulp-sass';
import gScssLint from 'gulp-scss-lint';
import gConcat from 'gulp-concat';
import gAutoPrefixer from 'gulp-autoprefixer';

const sassPaths = {
	src: './src/scss/**/*.scss',
	dest: './build/css'
}

const jsPaths = {
	src: './src/js/*.js',
	dest: './build/js'
}

const autoPrefxConfig = {
	browsers: ['last 2 versions'],
	cascade: false
}

gulp.task('sass', () => {
	return gulp.src(sassPaths.src)
	.pipe(gSass())
	.pipe(gulp.dest(sassPaths.dest));
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
	.pipe(gAutoPrefixer(autoPrefxConfig))
	.pipe(gulp.dest(sassPaths.dest));
});

gulp.task('scripts', () => {
	return gulp.src(jsPaths.src)
	.pipe(gConcat('scripts.js'))
	.pipe(gulp.dest(jsPaths.dest));
});
