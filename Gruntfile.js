module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            development: {
                files: {
                    "./assets/css/style.css": "./assets/scss/style.scss",
                }
            }
        },
        watch: {
            files: "./assets/scss/**/*",
            tasks: ["sass"]
        },
        cssmin: {
          combine: {
            files: {
              './assets/css/style.min.css': ['./bower_components/bootstrap/dist/css/bootstrap.min.css', 
                                             './assets/css/font-awesome.min.css',
                                             './assets/css/style.css']
            }
          }
        },
        uglify: {
            my_target: {
                files: {
                    './assets/js/output.min.js': ['./bower_components/bootstrap/dist/js/bootstrap.min.js', './bower_components/jquery/dist/jquery.min.js']
                }
            }
        }   
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('min', ['cssmin', 'uglify']);

    grunt.registerTask('default', ['watch']);

}
