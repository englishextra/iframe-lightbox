module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: ["iframe-lightbox.js"]
		}
	});
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default", "jshint");
};
