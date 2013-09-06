module.exports = function (grunt) {

    grunt.initConfig({
        meta: {
            files: ['app/js/**/*.js'],
            specs: ['test/unit/**/*.js']
        },
        watch: {
            files: ['<%= meta.files %>', '<%= meta.specs %>'],
            tasks: ['jshint', 'karma']
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
    // Default task.
    grunt.registerTask('default', 'jshint');
    // Travis CI task.
    grunt.registerTask('travis', ['jshint']);
};