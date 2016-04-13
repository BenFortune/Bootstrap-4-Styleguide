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
import gRunSequence from 'run-sequence';

const gulpConfig = {
	sassPaths: {
		src: './src/scss/**/*.scss',
		dest: './build/css'
	},
	jsPaths: {
		src: './src/js/*.js',
		dest: './build/js',
		filePaths: [
			'bower_components/jquery/dist/jquery.js',
			'node_modules/tether/dist/js/tether.min.js',
			'bootstrap-4.0.0-alpha/dist/js/bootstrap.min.js',
			'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
			'build/js/main.js'
		]
	},
	scssLint: {
		'config': 'scss-lint.yml',
	},
	autoPrefixConfig: {
		browsers: ['last 2 versions'],
		cascade: false
	},
	babelConfig: {
		presets: [
			'es2015'
		]
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

gulp.task('stylesBuild', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gScssLint(gulpConfig.scssLint))
	.pipe(gSass())
	.pipe(gAutoPrefixer(gulpConfig.autoPrefixConfig))
	.pipe(gCssComb())
	.pipe(gCssMinify())
	.pipe(gulp.dest(gulpConfig.sassPaths.dest));
});

gulp.task('scriptsLint', function() {
	return gulp.src('./src/js/*.js').pipe(gEsLint())
	.pipe(gEsLint.format())
	.pipe(gEsLint.failOnError());
});

gulp.task('scriptsBuild', () => {
	return gulp.src(gulpConfig.jsPaths.src)
	.pipe(gBabel(gulpConfig.babelConfig))
	.pipe(gulp.dest(gulpConfig.jsPaths.dest));
});

gulp.task('scriptsConcat', () => {
	return gulp.src(gulpConfig.jsPaths.filePaths)
	.pipe(gConcat('scripts.min.js'))
	.pipe(gulp.dest(gulpConfig.jsPaths.dest));
})

gulp.task('default', (done) => {
	gRunSequence('stylesBuild', 'scriptsLint', 'scriptsBuild', 'scriptsConcat', done);
});
