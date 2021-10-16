let mix = require('laravel-mix');

require('laravel-mix-serve');

mix
	.js('src/app.js', 'dist')
	.setPublicPath('dist')
	.serve('php -S localhost:8080 -t dist')

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		proxy: 'localhost:8080'
	});
}