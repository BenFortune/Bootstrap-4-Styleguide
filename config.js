export const gulpConfig = {
	sassPaths: {
		src: './src/scss/**/*.scss',
		dest: './build/css'
	},
	jsPaths: {
		src: './src/js/*.js',
		dest: './build/js',
		filePaths: [
			// 'bower_components/jquery/dist/jquery.js',
			// 'node_modules/tether/dist/js/tether.min.js',
			// 'bootstrap-4.0.0-alpha/dist/js/bootstrap.min.js',
			'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
			'build/js/scripts-b.js'
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
