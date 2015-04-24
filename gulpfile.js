var gulp   = require('gulp')
var uglify = require("gulp-uglify")
var rename = require('gulp-rename')
var jshint = require('gulp-jshint')
var esperanto = require('gulp-esperanto')
var babel = require('gulp-babel')

var sourceFile = 'dist/hasdom.js'

var bundleConfig = {
    // 是否进行打包，其它配置都是esperanto的配置
    bundle: true,
    type: 'umd',
    base: 'src',
    entry: 'index.js',
    name: 'hasdom',
    amdName: 'hasdom',
    strict: true
}

var babelTransformWhitelist = [
	'es3.memberExpressionLiterals',
	'es3.propertyLiterals',
	'es6.arrowFunctions',
	'es6.blockScoping',
	'es6.constants',
	'es6.destructuring',
	'es6.parameters.default',
	'es6.parameters.rest',
	'es6.properties.shorthand',
	'es6.templateLiterals'
]

gulp.task('uglify', ['bundle'], function() {
    return gulp.src(sourceFile)
      .pipe(uglify())
      .pipe(rename(function(path) {
        path.basename = 'hasdom.min'
      }))
      .pipe(gulp.dest('dist'))
})

gulp.task('lint', ['bundle'], function() {
    return gulp.src(sourceFile)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('bundle', function () {
    return gulp.src(bundleConfig.base + '/*.js')
        .pipe(esperanto(bundleConfig))
        .pipe(rename(renameBundle))
		.pipe(babel({whitelist: babelTransformWhitelist}))
        .pipe(gulp.dest('dist'))
})

function renameBundle(path) {
	path.basename = sourceFile.replace('.js', '').split('/').pop()
}

gulp.task('default', ['lint', 'uglify'])
