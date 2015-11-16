'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-serve');

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
		    server: {
		    	options: {
			        port: 9000,
			        livereload: true,
			        base: './app'
		    	}
		    }
		},
		project: {
		    app: ['app'],
		    assets: ['<%= project.app %>/assets'],
		    css: ['<%= project.assets %>/sass/style.scss']
		},
		sass: {
		    dev: {
		        options: {
		            style: 'expanded',
		            compass: false
		        },
		        files: {
		            '<%= project.assets %>/css/style.css':'<%= project.css %>'
		        }
		    }
		},
		watch: {
		    sass: {
		        files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
		        tasks: ['sass:dev'],
		        options: {
			      livereload: true,
			    }
		    }
		}
    });

    grunt.registerTask('default', ['connect:server','watch'] );

};