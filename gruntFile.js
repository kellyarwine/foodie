module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jst: {
      compile: {
        files: {
        }
      }
    },
    watch: {
     jst: {
      }
    },
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
        cwd: 'scripts',
        src: '**/*.coffee',
        dest: '.tmp/scripts',
        ext: '.js'
      },
      compileSpecs: {
        expand: true,
        flatten: true,
        cwd: 'spec',
        src: '**/*.coffee',
        dest: '.tmp/spec',
        ext: '.js'
      }
    },
    uglify: {
      my_target: {
        files: {'foodie.min.js': [
                                   'bower_components/jquery/jquery.min.js',
                                   'bower_components/underscore/underscore.js',
                                   'bower_components/backbone/backbone.js',
                                   '.tmp/scripts/app.js',
                                   ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jst']);
  grunt.registerTask('compile', ['clean', 'jst', 'coffee']);
  grunt.registerTask('build', ['clean', 'jst', 'coffee', 'uglify']);
}