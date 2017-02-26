module.exports = {
    copyHTML: {
        expand: true,
        cwd: '<%= path.src %>',
        src: [
            '**/*.html'
        ],
        dest: '<%= path.build %>'
    },
    copyDATA: {
        expand: true,
        cwd: '<%= path.src %>assets/data/',
        src: [
            '**/*'
        ],
        dest: '<%= path.build %>assets/data/'
    }
};
