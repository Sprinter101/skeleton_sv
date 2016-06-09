const gulp = require('gulp');
const util = require('gulp-util');
const path = require('path');
const args  = require('yargs').argv;



const modulesPath = args.modulesPath || path.join(__dirname, 'node_modules');
const gulpHelper =
    require(path.join(modulesPath, '/clobl/gulp-helper.js'))
        .use(gulp)
        .setPath({
            root: __dirname,
            modules: modulesPath,
            soy: {
                root: path.join(__dirname, 'build')
            }
        });

const quizGulpHelper =
    require('./gulp/gulp-helper')
        .setHelper(gulpHelper)
        .setOptions({
            modulesPath: path.resolve(__dirname, modulesPath)
        });

//const config = require('./config/config.json');
const apiAddress = args.apiAddress || require('./config/config.json').api.url;
const gulpConfig = require('./gulp/config.json');

const production = !!util.env.production;

//with gulp-helper

gulp.task('lint', function() {
    return gulpHelper.js.lint({
        ignore: gulpConfig
            .lintIgnore
            .map(ignoreItem => path.resolve(__dirname, ignoreItem))
    });
});

gulp.task('soy', function () {
    return gulpHelper.soy.build([]);
});

gulp.task('scripts', ['soy'], function () {
    return gulpHelper.js.build({
        outputFiles: [
            {
                entryPoint: 'sv.lSberVmeste.Main',
                fileName: 'scripts.js'
            }
        ]
        //,compile: true
    });
});


gulp.task('styles', function () {
    return gulpHelper.css.build({
    });
});

gulp.task('html', ['scripts'], function() {
    return quizGulpHelper.buildCordovaHtml({
        template: 'sv.lSberVmeste.Template.sberVmeste',
        templateParams: {
            data: {
                apiUrl: apiAddress
            }
        },
        dest: path.join(__dirname, './public')
    });
});

gulp.task('watch', function () {
    gulp.watch(
        [path.join(__dirname, 'blocks', '/**/*.soy')],
        ['scripts']
    );
    gulp.watch(
        [path.join(__dirname, 'blocks', '/**/*.js')],
        ['scripts']
    );
    gulp.watch([
        path.join(__dirname, 'blocks', '/**/*.scss'),
        path.join(__dirname, 'blocks', '/**/*.css')
    ], ['styles']);
});

const tasks = function (bool) {
    return bool ?
        ['soy', 'scripts', 'styles', 'html'] :
        ['watch', 'soy', 'scripts', 'styles', 'html'];
};

gulp.task('default', tasks(production));

gulp.task('build', [
    'html',
    'styles',
    'soy',
    'scripts'
]);
