module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

		replace: {
			example: {
				src: ['source/includes/*.md'],             // source files array (supports minimatch)
				dest: 'source/includes/',             // destination directory or file
				replacements: [{
					from: '```twig',                   // string replacement
					to: '```handlebars'
				}]
			}
		}
	});


	grunt.loadNpmTasks('grunt-text-replace');
	grunt.registerTask('default', ['replace']);

};
