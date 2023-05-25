const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const gulpAutoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const image = require('gulp-image');
const babel = require('gulp-babel');
const  notify  = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create()


const cleans = () => {
    return del(['build'])
}


const styles = () => {
    return src('dev/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(gulpAutoprefixer ({
        cascade: false
    }))
    .pipe(cleanCss ({
        level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('build'))
    .pipe(browserSync.stream())
}

const htmlMinfy = () => {
    return src('dev/**/*.html')
    .pipe(htmlMin ({
        collapseWhitespace: true,
    }))
    .pipe(dest('build'))
    .pipe(browserSync.stream())
}

const images = () => {
    return src([
        'dev/img/**/*.jpg',
        'dev/img/**/*.png',
        'dev/img/**/*.svg',
        'dev/img/**/*.jpeg',
        'dev/img/**/*.ico'
    ])
    .pipe(image())
    .pipe(dest('build/img'))
}

const scripts = () => {
    return src('dev/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('build/js'))
    .pipe(browserSync.stream())
}

const libs = () => {
    return src('dev/libs/**/*.js')
    .pipe(dest('build/libs'))
}

const fonts = () => {
    return src([
    'dev/fonts/**/*.woff',
    'dev/fonts/**/*.woff2'
])
    .pipe(dest('build/fonts'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    })
}


watch('dev/**/*.html', htmlMinfy)
watch('dev/**/*.css', styles)
watch('dev/js**/*.js', scripts)
watch('dev/libs**/*.js', libs)
watch('dev/fonts/**', fonts)

exports.styles = styles
exports.htmlMinfy = htmlMinfy
exports.libs = libs
exports.fonts = fonts
exports.scripts = scripts
exports.default = series(cleans, fonts, libs, htmlMinfy, scripts, styles, images, watchFiles)
