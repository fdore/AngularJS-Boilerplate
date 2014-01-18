module.exports = function (grunt) {

    grunt.initConfig({
        meta: {
            files: ['app/js/**/*.js'],
            specs: ['test/unit/**/*.js'],
            less: ['app/**/*.less']
        },
        watch: {
            dev: {
                files: ['<%= meta.files %>', '<%= meta.specs %>'],
                tasks: ['jshint', 'karma:unit']
            },
            ui: {
                files: ['<%= meta.less %>'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['app/less'],
                    yuicompress: false
                },
                files: [
                    { 'app/css/app.css': 'app/less/app.less' }
                ]
            }
        },
        jshint: {
            all: ['GruntFile.js', '<%= meta.files %>', '<%= meta.specs %>'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                laxcomma: false,
                globals: {
                    Swipe: true,
                    require: true,
                    define: true,
                    requirejs: true,
                    describe: true,
                    expect: true,
                    it: true,
                    beforeEach: true,
                    afterEach: true,
                    angular: true,
                    module: true,
                    inject: true,
                    gapi: true,
                    spyOn: true
                }
            }
        },
        karma: {
            unit: {
                options: {
                    configFile: 'scripts/config/karma.conf.js',
                    singleRun: true,
                    browsers: ['Chrome']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    // Default task.
    grunt.registerTask('default', 'jshint');
    // Travis CI task.
    grunt.registerTask('travis', ['jshint']);
};