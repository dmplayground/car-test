module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var path = {
        src: "src/",
        build: "dist/",
        sass: "src/assets/sass/",
        css: "dist/assets/css/",
        js: "src/assets/js/",
        jsDist: "dist/assets/js/",
        template: "src/templates/",
        imgSrc: "src/assets/img/",
        imgDist: "dist/assets/img"
    };

    require('load-grunt-config')(grunt,{
        config: {
            path: path
        }
    });

    grunt.registerTask('default', ['clean','sass','concat','copy','connect','watch']);

};
