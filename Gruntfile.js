module.exports = function (grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("boilerplate.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
            " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
            " *  <%= pkg.description %>\n" +
            " *  <%= pkg.homepage %>\n" +
            " *\n" +
            " *  Made by <%= pkg.author.name %>\n" +
            " *  Under <%= pkg.licenses[0].type %> License\n" +
            " */\n"
        },

        // Concat definitions
        concat: {
            dist: {
                src: ["src/scrollsound.js"],
                dest: "dist/scrollsound.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // Lint definitions
        jshint: {
            files: ["src/scrollsound.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/scrollsound.js"],
                dest: "dist/scrollsound.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["jshint", "concat", "uglify"]);
    grunt.registerTask("travis", ["jshint"]);

};
