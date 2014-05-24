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
        src: '*/*.coffee',
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
    jst: {
      compile: {
        files: {
          '.tmp/scripts/templates.js': ['scripts/**/*.ejs']
        }
      }
    },
    watch: {
      css: {
        files: '**/*.css',
        options: {
          livereload: true,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-web-server');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('compile', ['clean', 'coffee']);
  grunt.registerTask('build', ['clean', 'coffee']);
  grunt.registerTask('default', ['clean', 'coffee', 'jst', 'web_server', 'watch']);
}