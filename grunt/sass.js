module.exports = {
    dist: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed'
        },
        files: [{
            '<%= path.css %>main.css': '<%= path.sass %>main.scss'
        }]
    }
}
