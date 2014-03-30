module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      test: {
        files: [{
          src: ['.tmp']
        }]
      }
    },
    coffee: {
      compileScripts: {
        expand: true,
        flatten: true,
        src: '**/*.coffee',
        dest: '.tmp/scripts',
        ext: '.js'
      },
    },
    web_server: {
      all: {
        options: {
          port: 8000,
          nevercache: true,
          logRequests: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-web-server');

  grunt.registerTask('compile', ['clean', 'coffee']);
  grunt.registerTask('build', ['clean', 'coffee']);
  grunt.registerTask('default', ['clean', 'coffee', 'web_server']);
}