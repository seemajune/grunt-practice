'use strict';
module.exports = function (grunt) { //wrapper func
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n*****\o/*****\n' // one of concat's built-in options
            },
            build: {
                src: 'src/*.txt',
                dest: 'build/big.txt'
            }
        },
        watch: {
            concat: {
                files: ['src/*.txt'],
                tasks: ['concat'],
                options: {
                    event: ['all'] //set options for added/deleted/changed or all to log to console by default the action taken
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat'); // load the plugin that provides the concat task
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
