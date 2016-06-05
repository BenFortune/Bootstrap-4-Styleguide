import gulp from 'gulp';
import gScssLint from 'gulp-scss-lint';
import gSass from 'gulp-sass';
import gAutoPrefixer from 'gulp-autoprefixer';
import gCssComb from 'gulp-csscomb';
import gCssMinify from 'gulp-cssnano';
import { gulpConfig } from '../config'

gulp.task('stylesBuild', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gScssLint(gulpConfig.scssLint))
	.pipe(gSass())
	.pipe(gAutoPrefixer(gulpConfig.autoPrefixConfig))
	.pipe(gCssComb())
	.pipe(gCssMinify())
	.pipe(gulp.dest(gulpConfig.sassPaths.dest));
});
