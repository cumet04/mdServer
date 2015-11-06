module.exports = function(grunt) {
    var src_dir = 'src';
    var dest_dir = 'dest';
    grunt.initConfig({
        markdown: {
            all: {
                src: '**/*.md',
                dest: dest_dir,
                expand: true,
                cwd: src_dir,
                ext: '.html',
                options: {
                    template: '__template.jst',
                }
            }
        },
        esteWatch:{
            options: {
                dirs: [src_dir + '/**', dest_dir + '/**'],
                livereload: {
                    enabled: true,
                    extensions: ['html']
                }
            },
            md: function(filepath) {
                grunt.config(['markdown', 'all', 'src'], filepath.replace(/^\.\.\//, ''));
                return 'markdown';
            }
        },
        connect: {
            server: {
                options: {
                    base: dest_dir,
                    hostname: '*',
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-este-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.file.expand([dest_dir+'/*', dest_dir+'/**/*', '!'+dest_dir+'/gfm.css']).forEach(grunt.file.delete);
    grunt.registerTask("default", ["connect", "markdown", "esteWatch"]);
};
