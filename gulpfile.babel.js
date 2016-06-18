'use strict';

import gulp from 'gulp';
import gSass from 'gulp-sass';
import gScssLint from 'gulp-scss-lint';
import gAutoPrefixer from 'gulp-autoprefixer';
import gCssComb from 'gulp-csscomb';
import gCssMinify from 'gulp-cssnano';
import gEsLint from 'gulp-eslint';
import gBabel from 'gulp-babel';
import gConcat from 'gulp-concat';
import browserify from 'browserify';
import vinylSourceStream from 'vinyl-source-stream';
import babelify from 'babelify';
import requireDir from 'require-dir'
import gRunSequence from 'run-sequence';
import { gulpConfig } from './config';

requireDir('./gulp', {recurse: true})

gulp.task('scriptsLint', () => {
	return gulp.src('./src/js/*.js')
	.pipe(gEsLint({
		fix: true
	}))
	.pipe(gEsLint.format())
	.pipe(gulp.dest('./src/js'));
});

gulp.task('browserify', () => {
	return browserify('./src/js/main.js')
	.transform(babelify, {presets: ['es2015']})
	.bundle()
	.pipe(vinylSourceStream('scripts-b.js'))
	.pipe(gulp.dest('./build/js'));
})

gulp.task('scriptsConcat', () => {
	return gulp.src(gulpConfig.jsPaths.filePaths)
	.pipe(gConcat('scripts.min.js'))
	.pipe(gulp.dest(gulpConfig.jsPaths.dest));
})

gulp.task('default', (done) => {
	gRunSequence('stylesBuild', 'scriptsLint', 'browserify', 'scriptsConcat', done);
});
