let mix = require('laravel-mix');

require('laravel-mix-serve');

mix
	.js('src/app.js', 'dist')
	.sass('src/app.sass', 'dist')
	// .setPublicPath('dist')
	// .serve('php -S localhost:8080 -t dist')

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		// proxy: 'localhost:8080'
		proxy: 'http://alpine-test.test/dist'
	});
}