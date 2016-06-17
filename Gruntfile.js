'use strict';
module.exports = function (grunt) { //wrapper func
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n*****\o/*****' // one of concat's built-in options
            },
            build: {
                src: 'src/*.txt',
                dest: 'build/big.txt'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat'); // load the plugin that provides the concat task
    
};
