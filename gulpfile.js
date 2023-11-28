const { series, src, dest } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

async function minimizeJavascripts() {
    src('./src/**/*.js')
        .pipe(babel({presets: ["@babel/env"]}))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('./public/javascripts/'))
}

exports.default = series(minimizeJavascripts)
