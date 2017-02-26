module.exports = {
    copy: {
        files: ['<%= path.src %>*'],
        tasks: ['copy']
    },
    sass: {
        files: ['<%= path.sass %>**/*'],
        tasks: ['sass']
    },
    concat: {
        files: ['<%= path.js %>**/*.js'],
        tasks: ['concat']
    }
}
