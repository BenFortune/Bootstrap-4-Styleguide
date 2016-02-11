'use strict';

import gulp from 'gulp';
import gSass from 'gulp-sass';
import gScssLint from 'gulp-scss-lint';
import gConcat from 'gulp-concat';
import gAutoPrefixer from 'gulp-autoprefixer';
import gCssMinify from 'gulp-cssnano';
import gEsLint from 'gulp-eslint';
import gBabel from 'gulp-babel';
import gRunSequence from 'run-sequence';

const gulpConfig = {
	sassPaths: {
		src: './src/scss/**/*.scss',
		dest: './build/css'
	},
	jsPaths: {
		src: './src/js/*.js',
		dest: './build/js'
	},
	scssLint: {
		'config': 'scss-lint.yml',
	},
	autoPrefxConfig: {
		browsers: ['last 2 versions'],
		cascade: false
	},
	esLintConfig: {
		'rules': {
			'quotes': [1, 'single'],
			'semi': [1, 'always']
		}
	}
}

gulp.task('sass', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gSass())
	.pipe(gulp.dest(gulpConfig.sassPaths.dest));
});

gulp.task('scss-lint', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gScssLint(gulpConfig.scssLint));
});

gulp.task('styles', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gScssLint(gulpConfig.scssLint))
	.pipe(gSass())
	.pipe(gAutoPrefixer(gulpConfig.autoPrefxConfig))
	.pipe(gCssMinify())
	.pipe(gulp.dest(gulpConfig.sassPaths.dest));
});

gulp.task('lint', function() {
  return gulp.src('./src/js/*.js').pipe(gEsLint({
    'rules':{
        'quotes': [1, 'single'],
        'semi': [1, 'always']
    }
  }))
  .pipe(gEsLint.format())
  // Brick on failure to be super strict
  .pipe(gEsLint.failOnError());
});

gulp.task('scripts', () => {
	return gulp.src(gulpConfig.jsPaths.src)
	.pipe(gBabel())
	.pipe(gConcat('scripts.js'))
	.pipe(gulp.dest(gulpConfig.jsPaths.dest));
});

gulp.task('default', (done) => {
	gRunSequence('styles', 'scripts', done);
});
