/*global require */
/*!
 * @see {@link https://github.com/mildrenben/surface/blob/master/gulpfile.js}
 * @see {@link https://www.webstoemp.com/blog/gulp-setup/}
 * @see {@link https://gulpjs.com/plugins/blackList.json}
 * @see {@link https://hackernoon.com/how-to-automate-all-the-things-with-gulp-b21a3fc96885}
 * @see {@link https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async}
 * @see {@link https://zzz.buzz/2016/11/19/gulp-4-0-upgrade-guide/}
 * @see {@link https://blog.khophi.co/migrate-gulp-4-complete-example/}
 * @see {@link https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/}
 * @see {@link https://codeburst.io/switching-to-gulp-4-0-271ae63530c0}
 */

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var minifyCss = require("gulp-clean-css");
var cleanCssOptions = {
	level: {
		1: {
			specialComments: 0
		}
	}
};
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");

var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

/*!
 * @see {@link https://github.com/postcss/autoprefixer#options}
 */
var autoprefixer = require("gulp-autoprefixer");
var autoprefixerOptions;
autoprefixerOptions = {
	browsers: ["last 2 versions"]
};

/*!
 * @see {@link https://github.com/babel/babel/issues/7910}
 */

var babel = require("gulp-babel");
var babelOptions;
babelOptions = {
	"sourceType": "script",
	"presets": ["@babel/env"],
	"plugins": ["@babel/plugin-transform-object-assign",
		"@babel/plugin-transform-arrow-functions",
		"@babel/plugin-transform-async-to-generator"]
};

/*!
 * @see {@link https://github.com/beautify-web/js-beautify}
 * a JSON-formatted file indicated by the --config parameter
 * a .jsbeautifyrc file containing JSON data at any level of the filesystem above $PWD
 * using external config may cause
 * failure to find it
 * if the input/output files reside higher
 * than the config file itself
 */
/* var beautify = require("gulp-jsbeautifier"); */
var beautifyOptions;
beautifyOptions = {
	/* "config": ".jsbeautifyrc", */
	"editorconfig": false,
	"indent_size": 4,
	"indent_char": "\t",
	"indent_with_tabs": true,
	"eol": "\n",
	"end_with_newline": true,
	"indent_level": 0,
	"preserve_newlines": true,
	"max_preserve_newlines": 10,
	"html": {
		"indent_inner_html": true,
		"indent_scripts": false,
		"js": {},
		"css": {}
	},
	"css": {
		"newline_between_rules": true
	},
	"js": {
		"space_in_paren": false,
		"space_in_empty_paren": false,
		"jslint_happy": false,
		"space_after_anon_function": true,
		"space_after_named_function": false,
		"brace_style": "collapse",
		"unindent_chained_methods": false,
		"break_chained_methods": true,
		"keep_array_indentation": true,
		"unescape_strings": false,
		"wrap_line_length": 0,
		"e4x": false,
		"comma_first": false,
		"operator_position": "before-newline"
	}
};

/*!
 * @see {@link https://prettier.io/docs/en/options.html}
 * using external config may cause
 * failure to find it
 * if the input/output files reside higher
 * than the config file itself
 */
var prettier = require("gulp-prettier");
var prettierOptions;
prettierOptions = {
	/* "config": ".prettierrc", */
	"tabWidth": 4,
	"useTabs": true,
	"endOfLine": "lf",
	"printWidth:": 0
};

var stripDebug = require("gulp-strip-debug");

var eslint = require("gulp-eslint");

/*!
 * @see {@link https://github.com/sasstools/sass-lint/blob/master/docs/sass-lint.yml}
 * @see {@link https://codebeautify.org/yaml-to-json-xml-csv}
 */
var csslint = require("gulp-sass-lint");
var csslintOptions;
var csslintOptions = {
	"options": {
		"merge-default-rules": false,
		"max-warnings": 50
	},
	"rules": {
		"attribute-quotes": 0,
		"border-zero": 0,
		"brace-style": 0,
		"class-name-format": 0,
		"clean-import-paths": 0,
		"empty-args": 0,
		"empty-line-between-blocks": 0,
		"extends-before-declarations": 0,
		"extends-before-mixins": 0,
		"final-newline": 0,
		"force-attribute-nesting": 0,
		"force-element-nesting": 0,
		"force-pseudo-nesting": 0,
		"function-name-format": 0,
		"hex-length": 0,
		"hex-notation": 0,
		"indentation": 0,
		"leading-zero": 0,
		"mixin-name-format": 0,
		"mixins-before-declarations": 0,
		"nesting-depth": 0,
		"no-color-keywords": 0,
		"no-color-literals": 0,
		"no-css-comments": 0,
		"no-debug": 0,
		"no-duplicate-properties": 0,
		"no-empty-rulesets": 0,
		"no-extends": 0,
		"no-ids": 0,
		"no-important": 0,
		"no-invalid-hex": 0,
		"no-mergeable-selectors": 0,
		"no-misspelled-properties": 0,
		"no-qualifying-elements": 0,
		"no-trailing-zero": 0,
		"no-transition-all": 0,
		"no-url-protocols": 0,
		"no-vendor-prefixes": 0,
		"no-warn": 0,
		"one-declaration-per-line": 0,
		"placeholder-in-extend": 0,
		"placeholder-name-format": 0,
		"property-sort-order": 0,
		"pseudo-element": 0,
		"quotes": 0,
		"shorthand-values": 0,
		"single-line-per-selector": 0,
		"space-after-bang": 0,
		"space-after-colon": 0,
		"space-after-comma": 0,
		"space-around-operator": 0,
		"space-before-bang": 0,
		"space-before-brace": 0,
		"space-before-colon": 0,
		"space-between-parens": 0,
		"trailing-semicolon": 0,
		"url-quotes": 0,
		"variable-for-property": 0,
		"variable-name-format": 0,
		"zero-unit": 0
	}
};

var options = {
	libbundle: {
		src: "./src/*.js",
		js: "./js",
		scss: "./scss/*.scss",
		css: "./css"
	},
};

gulp.task("compile-libbundle-css", function () {
	return gulp.src(options.libbundle.scss)
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sass({
			errLogToConsole: true
		}))
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(prettier(prettierOptions))
	/* .pipe(beautify(beautifyOptions)) */
	.pipe(plumber.stop())
	.pipe(gulp.dest(options.libbundle.css))
	.pipe(rename(function (path) {
			path.basename += ".min";
		}))
	.pipe(minifyCss(cleanCssOptions))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest(options.libbundle.css));
});

gulp.task("lint-libbundle-css", function () {
	return gulp.src(options.libbundle.scss)
	.pipe(csslint(csslintOptions))
	.pipe(csslint.format())
	.pipe(csslint.failOnError());
});

gulp.task("compile-libbundle-js", function () {
	return gulp.src(options.libbundle.src)
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(babel(babelOptions))
	.pipe(prettier(prettierOptions))
	/* .pipe(beautify(beautifyOptions)) */
	.pipe(plumber.stop())
	.pipe(gulp.dest(options.libbundle.js))
	.pipe(rename(function (path) {
			path.basename += ".min";
		}))
	.pipe(stripDebug())
	.pipe(uglify())
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest(options.libbundle.js));
});

gulp.task("lint-libbundle-js", function () {
	return gulp.src(options.libbundle.src)
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});

/*!
 * @see {@link https://browsersync.io/docs/gulp}
 */
gulp.task("browser-sync", gulp.series(gulp.parallel(
			"lint-libbundle-js",
			"lint-libbundle-css"), function watchChanges() {

		browserSync.init({
			server: "./"
		});

		gulp.watch("./*.html").on("change", reload);
		gulp.watch("./css/*.css").on("change", reload);
		gulp.watch("./scss/*.scss", gulp.parallel("compile-libbundle-css")).on("change", reload);
		gulp.watch("./js/*.js").on("change", reload);
		gulp.watch("./src/*.js", gulp.parallel("compile-libbundle-js")).on("change", reload);
	}));

gulp.task("default", gulp.task("browser-sync"));
