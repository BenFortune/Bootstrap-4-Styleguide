import gulp from 'gulp';
import gScssLint from 'gulp-scss-lint';
import { gulpConfig } from '../config'

gulp.task('scss-lint', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gScssLint(gulpConfig.scssLint));
});
