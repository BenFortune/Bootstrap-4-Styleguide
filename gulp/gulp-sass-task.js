import gulp from 'gulp';
import gSass from 'gulp-sass';
import { gulpConfig } from '../config'

gulp.task('sass', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gSass())
	.pipe(gulp.dest(gulpConfig.sassPaths.dest));
});
